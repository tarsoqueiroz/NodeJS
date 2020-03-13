
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        if (value != null || input.value) {
            input.value = value;
        }
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(children(options.target));
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.18.2' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
    }

    /* src/ContactCard.svelte generated by Svelte v3.18.2 */

    const file = "src/ContactCard.svelte";

    function create_fragment(ctx) {
    	let div3;
    	let header;
    	let div0;
    	let img;
    	let img_src_value;
    	let t0;
    	let div1;
    	let h1;
    	let t1;
    	let t2;
    	let h2;
    	let t3;
    	let t4;
    	let div2;
    	let p;
    	let t5;

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			header = element("header");
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			div1 = element("div");
    			h1 = element("h1");
    			t1 = text(/*userName*/ ctx[0]);
    			t2 = space();
    			h2 = element("h2");
    			t3 = text(/*jobTitle*/ ctx[1]);
    			t4 = space();
    			div2 = element("div");
    			p = element("p");
    			t5 = text(/*description*/ ctx[2]);
    			if (img.src !== (img_src_value = /*userImage*/ ctx[3])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*userName*/ ctx[0]);
    			attr_dev(img, "class", "svelte-1cgb34c");
    			add_location(img, file, 70, 6, 1195);
    			attr_dev(div0, "class", "thumb svelte-1cgb34c");
    			toggle_class(div0, "thumb-placeholder", !/*userImage*/ ctx[3]);
    			add_location(div0, file, 69, 4, 1130);
    			attr_dev(h1, "class", "svelte-1cgb34c");
    			add_location(h1, file, 73, 6, 1281);
    			attr_dev(h2, "class", "svelte-1cgb34c");
    			add_location(h2, file, 74, 6, 1307);
    			attr_dev(div1, "class", "user-data svelte-1cgb34c");
    			add_location(div1, file, 72, 4, 1251);
    			attr_dev(header, "class", "svelte-1cgb34c");
    			add_location(header, file, 67, 2, 1040);
    			add_location(p, file, 78, 4, 1382);
    			attr_dev(div2, "class", "description svelte-1cgb34c");
    			add_location(div2, file, 77, 2, 1352);
    			attr_dev(div3, "class", "contact-card svelte-1cgb34c");
    			add_location(div3, file, 66, 0, 1011);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, header);
    			append_dev(header, div0);
    			append_dev(div0, img);
    			append_dev(header, t0);
    			append_dev(header, div1);
    			append_dev(div1, h1);
    			append_dev(h1, t1);
    			append_dev(div1, t2);
    			append_dev(div1, h2);
    			append_dev(h2, t3);
    			append_dev(div3, t4);
    			append_dev(div3, div2);
    			append_dev(div2, p);
    			append_dev(p, t5);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*userImage*/ 8 && img.src !== (img_src_value = /*userImage*/ ctx[3])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*userName*/ 1) {
    				attr_dev(img, "alt", /*userName*/ ctx[0]);
    			}

    			if (dirty & /*userImage*/ 8) {
    				toggle_class(div0, "thumb-placeholder", !/*userImage*/ ctx[3]);
    			}

    			if (dirty & /*userName*/ 1) set_data_dev(t1, /*userName*/ ctx[0]);
    			if (dirty & /*jobTitle*/ 2) set_data_dev(t3, /*jobTitle*/ ctx[1]);
    			if (dirty & /*description*/ 4) set_data_dev(t5, /*description*/ ctx[2]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { userName } = $$props;
    	let { jobTitle } = $$props;
    	let { description } = $$props;
    	let { userImage } = $$props;
    	const writable_props = ["userName", "jobTitle", "description", "userImage"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ContactCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("userName" in $$props) $$invalidate(0, userName = $$props.userName);
    		if ("jobTitle" in $$props) $$invalidate(1, jobTitle = $$props.jobTitle);
    		if ("description" in $$props) $$invalidate(2, description = $$props.description);
    		if ("userImage" in $$props) $$invalidate(3, userImage = $$props.userImage);
    	};

    	$$self.$capture_state = () => {
    		return {
    			userName,
    			jobTitle,
    			description,
    			userImage
    		};
    	};

    	$$self.$inject_state = $$props => {
    		if ("userName" in $$props) $$invalidate(0, userName = $$props.userName);
    		if ("jobTitle" in $$props) $$invalidate(1, jobTitle = $$props.jobTitle);
    		if ("description" in $$props) $$invalidate(2, description = $$props.description);
    		if ("userImage" in $$props) $$invalidate(3, userImage = $$props.userImage);
    	};

    	return [userName, jobTitle, description, userImage];
    }

    class ContactCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			userName: 0,
    			jobTitle: 1,
    			description: 2,
    			userImage: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ContactCard",
    			options,
    			id: create_fragment.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*userName*/ ctx[0] === undefined && !("userName" in props)) {
    			console.warn("<ContactCard> was created without expected prop 'userName'");
    		}

    		if (/*jobTitle*/ ctx[1] === undefined && !("jobTitle" in props)) {
    			console.warn("<ContactCard> was created without expected prop 'jobTitle'");
    		}

    		if (/*description*/ ctx[2] === undefined && !("description" in props)) {
    			console.warn("<ContactCard> was created without expected prop 'description'");
    		}

    		if (/*userImage*/ ctx[3] === undefined && !("userImage" in props)) {
    			console.warn("<ContactCard> was created without expected prop 'userImage'");
    		}
    	}

    	get userName() {
    		throw new Error("<ContactCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set userName(value) {
    		throw new Error("<ContactCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get jobTitle() {
    		throw new Error("<ContactCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set jobTitle(value) {
    		throw new Error("<ContactCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get description() {
    		throw new Error("<ContactCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set description(value) {
    		throw new Error("<ContactCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get userImage() {
    		throw new Error("<ContactCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set userImage(value) {
    		throw new Error("<ContactCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.18.2 */
    const file$1 = "src/App.svelte";

    function create_fragment$1(ctx) {
    	let h1;
    	let t0;
    	let t1;
    	let t2;
    	let t3;
    	let t4;
    	let t5;
    	let button;
    	let t7;
    	let input0;
    	let t8;
    	let input1;
    	let t9;
    	let input2;
    	let t10;
    	let textarea;
    	let t11;
    	let current;
    	let dispose;

    	const contactcard = new ContactCard({
    			props: {
    				userName: /*name*/ ctx[0],
    				jobTitle: /*title*/ ctx[1],
    				description: /*description*/ ctx[3],
    				userImage: /*image*/ ctx[2]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			t0 = text("Hello dear ");
    			t1 = text(/*uppercaseName*/ ctx[5]);
    			t2 = text(", my age is ");
    			t3 = text(/*age*/ ctx[4]);
    			t4 = text("!");
    			t5 = space();
    			button = element("button");
    			button.textContent = "Change Age of user";
    			t7 = space();
    			input0 = element("input");
    			t8 = space();
    			input1 = element("input");
    			t9 = space();
    			input2 = element("input");
    			t10 = space();
    			textarea = element("textarea");
    			t11 = space();
    			create_component(contactcard.$$.fragment);
    			attr_dev(h1, "class", "svelte-i7qo5m");
    			add_location(h1, file$1, 48, 0, 714);
    			add_location(button, file$1, 49, 0, 768);
    			attr_dev(input0, "type", "text");
    			add_location(input0, file$1, 54, 0, 967);
    			attr_dev(input1, "type", "text");
    			add_location(input1, file$1, 55, 0, 1009);
    			attr_dev(input2, "type", "text");
    			add_location(input2, file$1, 56, 0, 1052);
    			attr_dev(textarea, "rows", "3");
    			add_location(textarea, file$1, 57, 0, 1095);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			append_dev(h1, t0);
    			append_dev(h1, t1);
    			append_dev(h1, t2);
    			append_dev(h1, t3);
    			append_dev(h1, t4);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, button, anchor);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, input0, anchor);
    			set_input_value(input0, /*name*/ ctx[0]);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, input1, anchor);
    			set_input_value(input1, /*title*/ ctx[1]);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, input2, anchor);
    			set_input_value(input2, /*image*/ ctx[2]);
    			insert_dev(target, t10, anchor);
    			insert_dev(target, textarea, anchor);
    			set_input_value(textarea, /*description*/ ctx[3]);
    			insert_dev(target, t11, anchor);
    			mount_component(contactcard, target, anchor);
    			current = true;

    			dispose = [
    				listen_dev(button, "click", /*incrementAge*/ ctx[6], false, false, false),
    				listen_dev(input0, "input", /*input0_input_handler*/ ctx[10]),
    				listen_dev(input1, "input", /*input1_input_handler*/ ctx[11]),
    				listen_dev(input2, "input", /*input2_input_handler*/ ctx[12]),
    				listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[13])
    			];
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*uppercaseName*/ 32) set_data_dev(t1, /*uppercaseName*/ ctx[5]);
    			if (!current || dirty & /*age*/ 16) set_data_dev(t3, /*age*/ ctx[4]);

    			if (dirty & /*name*/ 1 && input0.value !== /*name*/ ctx[0]) {
    				set_input_value(input0, /*name*/ ctx[0]);
    			}

    			if (dirty & /*title*/ 2 && input1.value !== /*title*/ ctx[1]) {
    				set_input_value(input1, /*title*/ ctx[1]);
    			}

    			if (dirty & /*image*/ 4 && input2.value !== /*image*/ ctx[2]) {
    				set_input_value(input2, /*image*/ ctx[2]);
    			}

    			if (dirty & /*description*/ 8) {
    				set_input_value(textarea, /*description*/ ctx[3]);
    			}

    			const contactcard_changes = {};
    			if (dirty & /*name*/ 1) contactcard_changes.userName = /*name*/ ctx[0];
    			if (dirty & /*title*/ 2) contactcard_changes.jobTitle = /*title*/ ctx[1];
    			if (dirty & /*description*/ 8) contactcard_changes.description = /*description*/ ctx[3];
    			if (dirty & /*image*/ 4) contactcard_changes.userImage = /*image*/ ctx[2];
    			contactcard.$set(contactcard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(contactcard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(contactcard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(button);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(input0);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(input1);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(input2);
    			if (detaching) detach_dev(t10);
    			if (detaching) detach_dev(textarea);
    			if (detaching) detach_dev(t11);
    			destroy_component(contactcard, detaching);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let name = "Max";
    	let title = "";
    	let image = "";
    	let description = "";
    	let newName = "Maximilian";
    	let age = 22;

    	function incrementAge() {
    		$$invalidate(4, age += 1);
    	}

    	function changeName() {
    		let auxName = name;
    		$$invalidate(0, name = newName);
    		newName = auxName;
    	}

    	function nameInput(event) {
    		const enteredValue = event.target.value;
    		newName = enteredValue;
    	}

    	function input0_input_handler() {
    		name = this.value;
    		$$invalidate(0, name);
    	}

    	function input1_input_handler() {
    		title = this.value;
    		$$invalidate(1, title);
    	}

    	function input2_input_handler() {
    		image = this.value;
    		$$invalidate(2, image);
    	}

    	function textarea_input_handler() {
    		description = this.value;
    		$$invalidate(3, description);
    	}

    	$$self.$capture_state = () => {
    		return {};
    	};

    	$$self.$inject_state = $$props => {
    		if ("name" in $$props) $$invalidate(0, name = $$props.name);
    		if ("title" in $$props) $$invalidate(1, title = $$props.title);
    		if ("image" in $$props) $$invalidate(2, image = $$props.image);
    		if ("description" in $$props) $$invalidate(3, description = $$props.description);
    		if ("newName" in $$props) newName = $$props.newName;
    		if ("age" in $$props) $$invalidate(4, age = $$props.age);
    		if ("uppercaseName" in $$props) $$invalidate(5, uppercaseName = $$props.uppercaseName);
    	};

    	let uppercaseName;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*name*/ 1) {
    			 $$invalidate(5, uppercaseName = name.toUpperCase());
    		}

    		if ($$self.$$.dirty & /*name*/ 1) {
    			 if (name === "Maximilian") {
    				console.log("It runs!!!");
    				$$invalidate(4, age = 31);
    			}
    		}

    		if ($$self.$$.dirty & /*name, age*/ 17) {
    			// $: console.log(name)
    			// $: console.log(age)
    			 {
    				console.log("Function with 2 variables");
    				console.log(name);
    				console.log(age);
    			}
    		}
    	};

    	return [
    		name,
    		title,
    		image,
    		description,
    		age,
    		uppercaseName,
    		incrementAge,
    		newName,
    		changeName,
    		nameInput,
    		input0_input_handler,
    		input1_input_handler,
    		input2_input_handler,
    		textarea_input_handler
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    const app = new App({
    	target: document.body
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
