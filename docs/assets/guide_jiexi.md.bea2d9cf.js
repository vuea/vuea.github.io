import{o as n,c as s,b as a}from"./app.6008987c.js";const p='{"title":"各类解析封装","description":"","frontmatter":{},"headers":[{"level":2,"title":"fengshows.js","slug":"fengshows-js"},{"level":2,"title":"xigua.js","slug":"xigua-js"}],"relativePath":"guide/jiexi.md","lastUpdated":1621961748922}',t={},o=a('<h1 id="各类解析封装"><a class="header-anchor" href="#各类解析封装" aria-hidden="true">#</a> 各类解析封装</h1><h2 id="fengshows-js"><a class="header-anchor" href="#fengshows-js" aria-hidden="true">#</a> fengshows.js</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  proxy<span class="token punctuation">,</span>\n  req\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lib/axios&#39;</span>\n<span class="token keyword">import</span> md5 <span class="token keyword">from</span> <span class="token string">&#39;js-md5&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token parameter">Url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> timestamp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1800</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> txTime <span class="token operator">=</span> timestamp<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> uri <span class="token operator">=</span> Url<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>Url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Url<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> txSecret <span class="token operator">=</span> <span class="token function">md5</span><span class="token punctuation">(</span><span class="token string">&#39;obb9Lxyv5C&#39;</span> <span class="token operator">+</span> uri <span class="token operator">+</span> txTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">/*  if (Url.indexOf(&#39;?&#39;) !== -1) {\n    Url = Url.substring(0, Url.indexOf(&#39;?&#39;)) + &#39;?txSecret=&#39; + txSecret + &#39;&amp;txTime=&#39; + txTime;\n  } else {\n    Url = Url + &#39;?txSecret=&#39; + txSecret + &#39;&amp;txTime=&#39; + txTime;\n  } */</span>\n  Url <span class="token operator">=</span> <span class="token string">&#39;http://hlive.fengshows.cn&#39;</span> <span class="token operator">+</span> uri <span class="token operator">+</span> <span class="token string">&#39;.flv?txSecret=&#39;</span> <span class="token operator">+</span>\n    txSecret <span class="token operator">+</span> <span class="token string">&#39;&amp;txTime=&#39;</span> <span class="token operator">+</span> txTime<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> Url\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fsUrl</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    req<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>proxy <span class="token operator">+</span> <span class="token string">&#39;https://api.fengshows.cn/live&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      params<span class="token operator">:</span> <span class="token punctuation">{</span>\n        live_type<span class="token operator">:</span> <span class="token string">&#39;tv&#39;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> doc <span class="token operator">=</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;凤凰卫视&#39;</span> <span class="token operator">+</span> res<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>title<span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n          name<span class="token operator">:</span> <span class="token string">&#39;省流&#39;</span><span class="token punctuation">,</span>\n          url<span class="token operator">:</span> <span class="token function">setUrl</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>live_url_sd<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          name<span class="token operator">:</span> <span class="token string">&#39;标清&#39;</span><span class="token punctuation">,</span>\n          url<span class="token operator">:</span> <span class="token function">setUrl</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>live_url_hd<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          name<span class="token operator">:</span> <span class="token string">&#39;高清&#39;</span><span class="token punctuation">,</span>\n          url<span class="token operator">:</span> <span class="token function">setUrl</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>live_url_fhd<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          name<span class="token operator">:</span> <span class="token string">&#39;音频&#39;</span><span class="token punctuation">,</span>\n          url<span class="token operator">:</span> <span class="token function">setUrl</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>url_audio_sd<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="xigua-js"><a class="header-anchor" href="#xigua-js" aria-hidden="true">#</a> xigua.js</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  proxy<span class="token punctuation">,</span>\n  req<span class="token punctuation">,</span>\n  env\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lib/axios&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  decode\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;js-base64&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">crc32</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> <span class="token function-variable function">n</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> t <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>\n          e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token number">256</span> <span class="token operator">!=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>n<span class="token punctuation">)</span> t <span class="token operator">=</span> n<span class="token punctuation">,</span>\n        t <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;</span> t <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">306674912</span> <span class="token operator">^</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        t <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;</span> t <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">306674912</span> <span class="token operator">^</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        t <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;</span> t <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">306674912</span> <span class="token operator">^</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        t <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;</span> t <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">306674912</span> <span class="token operator">^</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        t <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;</span> t <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">306674912</span> <span class="token operator">^</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        t <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;</span> t <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">306674912</span> <span class="token operator">^</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        t <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;</span> t <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">306674912</span> <span class="token operator">^</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        t <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&amp;</span> t <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">306674912</span> <span class="token operator">^</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        e<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token string">&quot;undefined&quot;</span> <span class="token operator">!=</span> <span class="token keyword">typeof</span> Int32Array <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Int32Array</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">:</span> e\n    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">o</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> e<span class="token punctuation">,</span> o<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>\n          i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>\n          a <span class="token operator">=</span> t<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">;</span><span class="token punctuation">)</span> e <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        e <span class="token operator">&lt;</span> <span class="token number">128</span> <span class="token operator">?</span> r <span class="token operator">=</span> r <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> e<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">:</span> e <span class="token operator">&lt;</span> <span class="token number">2048</span> <span class="token operator">?</span> <span class="token punctuation">(</span>r <span class="token operator">=</span> r <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">192</span> <span class="token operator">|</span> e <span class="token operator">&gt;&gt;</span> <span class="token number">6</span> <span class="token operator">&amp;</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r <span class="token operator">=</span>\n          r <span class="token operator">&gt;&gt;&gt;</span>\n          <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">128</span> <span class="token operator">|</span> <span class="token number">63</span> <span class="token operator">&amp;</span> e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> e <span class="token operator">&gt;=</span> <span class="token number">55296</span> <span class="token operator">&amp;&amp;</span> e <span class="token operator">&lt;</span> <span class="token number">57344</span> <span class="token operator">?</span> <span class="token punctuation">(</span>e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1023</span> <span class="token operator">&amp;</span> e<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">64</span><span class="token punctuation">,</span> o <span class="token operator">=</span> <span class="token number">1023</span> <span class="token operator">&amp;</span> t<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>\n            i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r <span class="token operator">=</span> r <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">240</span> <span class="token operator">|</span> e <span class="token operator">&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">&amp;</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r <span class="token operator">=</span> r <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">128</span> <span class="token operator">|</span> e <span class="token operator">&gt;&gt;</span> <span class="token number">2</span> <span class="token operator">&amp;</span> <span class="token number">63</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          r <span class="token operator">=</span>\n          r <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">128</span> <span class="token operator">|</span> o <span class="token operator">&gt;&gt;</span> <span class="token number">6</span> <span class="token operator">&amp;</span> <span class="token number">15</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&amp;</span> e<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r <span class="token operator">=</span> r <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">128</span> <span class="token operator">|</span> <span class="token number">63</span> <span class="token operator">&amp;</span> o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span>\n        <span class="token punctuation">(</span>\n          r <span class="token operator">=</span> r <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">224</span> <span class="token operator">|</span> e <span class="token operator">&gt;&gt;</span> <span class="token number">12</span> <span class="token operator">&amp;</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r <span class="token operator">=</span> r <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">128</span> <span class="token operator">|</span> e <span class="token operator">&gt;&gt;</span> <span class="token number">6</span> <span class="token operator">&amp;</span> <span class="token number">63</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r <span class="token operator">=</span> r <span class="token operator">&gt;&gt;&gt;</span>\n          <span class="token number">8</span> <span class="token operator">^</span> n<span class="token punctuation">[</span><span class="token number">255</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">128</span> <span class="token operator">|</span> <span class="token number">63</span> <span class="token operator">&amp;</span> e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> r <span class="token operator">^</span> <span class="token operator">-</span><span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    r <span class="token operator">=</span> <span class="token string">&quot;/video/urls/v/1/toutiao/mp4/&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;?r=&quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token string">&quot;/&quot;</span> <span class="token operator">!=</span> r<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>r <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token function">o</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>proxy <span class="token operator">+</span> <span class="token string">&quot;https://ib.365yg.com&quot;</span> <span class="token operator">+</span> r <span class="token operator">+</span> <span class="token string">&quot;&amp;s=&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">xgUrl</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    req<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token function">crc32</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> doc <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;标清&#39;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token function">decode</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>video_list<span class="token punctuation">.</span>video_1<span class="token punctuation">.</span>main_url<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;高清&#39;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token function">decode</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>video_list<span class="token punctuation">.</span>video_2<span class="token punctuation">.</span>main_url<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;超清&#39;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token function">decode</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>video_list<span class="token punctuation">.</span>video_3<span class="token punctuation">.</span>main_url<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',5);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
