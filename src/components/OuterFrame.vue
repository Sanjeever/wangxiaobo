<template>
  <div>
    <div id="banner">
      <div id="banner-inner">
        <h1 id="banner-header">
          <router-link to="/">王小波中文站</router-link>
        </h1>
        <h2 id="banner-description">Wang Syao Pwo In China</h2>
      </div>
    </div>
    <div id="PageBody">
      <div id="PageBody-inner">
        <div id="alpha">
          <div id="alpha-inner">
            <slot></slot>
            <p></p>
          </div>
        </div>
      </div>
    </div>

    <div id="footer">
      <div id="footer-inner">
        <h2>
          <router-link to="/index">王小波中文站</router-link
          >&nbsp;&nbsp;1952-2022
        </h2>
      </div>
    </div>
  </div>
</template>

<style>
#banner {
  height: auto;
  padding-bottom: 0px;
}

#banner #banner-inner #banner-header {
  margin-bottom: 0;
}

#banner h1 {
  text-align: center;
  color: rgb(106, 107, 122);
  font: 1.8em / 2em "微软雅黑 Light", "Times New Roman", Times, Palatino,
    Georgia, serif;
  padding: 10px 0px 0px;
}

#banner h2 {
  color: #fff;
  margin: 0;
  padding: 4px;
  text-align: center;
  font: 0.9em "Lucida Grande", Arial, Helvetica, Verdana, sans-serif;
  letter-spacing: 0.05em;
  border: double #eee;
  background-color: #726c5f;
}

#banner h1 a:link,
#banner h1 a:visited {
  color: #000000;
  text-decoration: none;
  font-size: 1.4em;
}

#banner h1 a:hover {
  color: #666666;
}

#footer h2 {
  clear: both;
  color: #fff;
  margin: 0;
  padding: 4px;
  text-align: center;
  font: 0.9em "Lucida Grande", Arial, Helvetica, Verdana, sans-serif;
  letter-spacing: 0.05em;
  border: double #eee;
  background-color: #726c5f;
}

#footer a:link,
#footer a:visited {
  color: #ffffff;
  text-decoration: underline;
}

#footer a:hover {
  color: #ffffff;
  text-decoration: none;
}

#PageBody {
  margin: 0;
  padding: 4px 0;
  border: double #ccc;
  background-color: #fff;
}

#alpha {
  width: 65%;
  max-width: 750px;
  margin-left: 15%;
}
</style>
