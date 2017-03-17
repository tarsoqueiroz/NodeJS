# OpenDATA

## Reference

Some links to reference:

* [Best Practices for Designing a Pragmatic RESTful API](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
* [API Design: Think First, Code Later](https://www.ckl.io/blog/api-design-think-first-code-later/)
* Learn REST: [A RESTful Tutorial](http://www.restapitutorial.com/)
* [The Ultimate Guide to API Design](https://blog.qmo.io/ultimate-guide-to-api-design/)
* The best reference about [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) from Mozilla
* The latest published version of [JSON API](http://jsonapi.org/format/), which is currently version 1.0
* The JavaScript Object Notation (JSON) Data Interchange Format ([RFC7159](https://tools.ietf.org/html/rfc7159))
* XML Media Types ([RFC7303](https://tools.ietf.org/html/rfc7303))
* [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml)
* [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
* [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
* [List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
* [The REST APIs and HATEOAS](https://developer.paypal.com/docs/api/hateoas-links/)
* [Github Developer API](https://developer.github.com/v3/)
* [TWILIO REST API](https://www.twilio.com/docs/api/rest)
* [Udacity Catalog API](https://www.udacity.com/catalog-api)

## Keyspace

```
CREATE KEYSPACE da_sample WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}  AND durable_writes = true;

CREATE TABLE da_sample.cities (
    id int PRIMARY KEY,
    city text,
    country text,
    state text,
    zipcode text
) WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';

CREATE TABLE da_sample.people (
    id text PRIMARY KEY,
    age int,
    email text,
    name text,
    phone text,
    photo text,
    surname text
) WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';
```

## Tables

### Cities

```
CREATE TABLE da_sample.cities (
    id int PRIMARY KEY,
    city text,
    country text,
    state text,
    zipcode text
) WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';
```

### People

```
CREATE TABLE da_sample.people (
    id text PRIMARY KEY,
    age int,
    email text,
    name text,
    phone text,
    photo text,
    surname text
) WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';
```
 
