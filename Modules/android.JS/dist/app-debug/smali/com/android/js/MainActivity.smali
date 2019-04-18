.class public Lcom/android/js/MainActivity;
.super Landroid/support/v7/app/AppCompatActivity;
.source "MainActivity.java"


# static fields
.field public static _startedNodeAlready:Z


# instance fields
.field public myWebView:Landroid/webkit/WebView;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .prologue
    .line 22
    const-string v0, "native-lib"

    invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V

    .line 23
    const-string v0, "node"

    invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V

    .line 41
    const/4 v0, 0x0

    sput-boolean v0, Lcom/android/js/MainActivity;->_startedNodeAlready:Z

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .prologue
    .line 18
    invoke-direct {p0}, Landroid/support/v7/app/AppCompatActivity;-><init>()V

    return-void
.end method


# virtual methods
.method public onBackPressed()V
    .locals 1

    .prologue
    .line 32
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->canGoBack()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 33
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->goBack()V

    .line 37
    :goto_0
    return-void

    .line 35
    :cond_0
    invoke-super {p0}, Landroid/support/v7/app/AppCompatActivity;->onBackPressed()V

    goto :goto_0
.end method

.method protected onCreate(Landroid/os/Bundle;)V
    .locals 4
    .param p1, "savedInstanceState"    # Landroid/os/Bundle;

    .prologue
    const/4 v3, 0x1

    .line 45
    invoke-super {p0, p1}, Landroid/support/v7/app/AppCompatActivity;->onCreate(Landroid/os/Bundle;)V

    .line 46
    const v0, 0x7f04001b

    invoke-virtual {p0, v0}, Lcom/android/js/MainActivity;->setContentView(I)V

    .line 49
    sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-static {}, Landroid/os/Environment;->getRootDirectory()Ljava/io/File;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/io/PrintStream;->println(Ljava/lang/Object;)V

    .line 50
    invoke-static {p0, p0}, Lcom/android/js/PermissionRequest;->checkAndAskForPermissions(Landroid/app/Activity;Landroid/content/Context;)V

    .line 52
    sget-boolean v0, Lcom/android/js/MainActivity;->_startedNodeAlready:Z

    if-nez v0, :cond_0

    .line 53
    sput-boolean v3, Lcom/android/js/MainActivity;->_startedNodeAlready:Z

    .line 54
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/android/js/MainActivity$1;

    invoke-direct {v1, p0}, Lcom/android/js/MainActivity$1;-><init>(Lcom/android/js/MainActivity;)V

    invoke-direct {v0, v1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    .line 74
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    .line 83
    :cond_0
    const v0, 0x7f0b005e

    invoke-virtual {p0, v0}, Lcom/android/js/MainActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/webkit/WebView;

    iput-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    .line 87
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    new-instance v1, Lcom/android/js/JavaIPC;

    iget-object v2, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-direct {v1, p0, v2}, Lcom/android/js/JavaIPC;-><init>(Lcom/android/js/MainActivity;Landroid/webkit/WebView;)V

    const-string v2, "android"

    invoke-virtual {v0, v1, v2}, Landroid/webkit/WebView;->addJavascriptInterface(Ljava/lang/Object;Ljava/lang/String;)V

    .line 90
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object v0

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setJavaScriptEnabled(Z)V

    .line 91
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object v0

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setDomStorageEnabled(Z)V

    .line 92
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object v0

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setAllowFileAccess(Z)V

    .line 93
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-static {v3}, Landroid/webkit/WebView;->setWebContentsDebuggingEnabled(Z)V

    .line 94
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    new-instance v1, Landroid/webkit/WebViewClient;

    invoke-direct {v1}, Landroid/webkit/WebViewClient;-><init>()V

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->setWebViewClient(Landroid/webkit/WebViewClient;)V

    .line 95
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object v0

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setAllowFileAccessFromFileURLs(Z)V

    .line 96
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object v0

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setAllowUniversalAccessFromFileURLs(Z)V

    .line 97
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object v0

    sget-object v1, Landroid/webkit/WebSettings$PluginState;->ON:Landroid/webkit/WebSettings$PluginState;

    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setPluginState(Landroid/webkit/WebSettings$PluginState;)V

    .line 99
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    const-string v1, "file:///android_asset/myapp/views/index.html"

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->loadUrl(Ljava/lang/String;)V

    .line 105
    iget-object v0, p0, Lcom/android/js/MainActivity;->myWebView:Landroid/webkit/WebView;

    new-instance v1, Lcom/android/js/MainActivity$2;

    invoke-direct {v1, p0}, Lcom/android/js/MainActivity$2;-><init>(Lcom/android/js/MainActivity;)V

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->setWebChromeClient(Landroid/webkit/WebChromeClient;)V

    .line 127
    return-void
.end method

.method public native startNodeWithArguments([Ljava/lang/String;)Ljava/lang/Integer;
.end method
