<template>
  <div id="app">
    <!------------
    -   Header   -
    ------------->

    <header id="header" class="section_1">
      <img
        id="prof_pic"
        alt="David Anderson"
        src="../public/Images/David's_typical_Profile_Picture.jpg"
      />

      <h1 id="name_plate">
        <router-link class="name_plate" to="/about">David Anderson</router-link>
      </h1>

      <h2 id="institution_name">Georgia Institute of Technology</h2>

      <!----------------
      -   Navigation   -
      ----------------->

      <!--      <nav-->
      <!--          class="navbar navbar-expand-lg navbar-light"-->
      <!--          style="background-color: #e3f2fd"-->
      <!--      >-->
      <!--        <div class="container-fluid">-->
      <!--          <router-link-->
      <!--              aria-current="page"-->
      <!--              class="nav-item navbar-brand nav-link"-->
      <!--              to="/"-->
      <!--          >-->
      <!--            Operation Opportunity-->
      <!--          </router-link>-->
      <!--          <button-->
      <!--              aria-controls="navbarSupportedContent"-->
      <!--              aria-expanded="false"-->
      <!--              aria-label="Toggle navigation"-->
      <!--              class="navbar-toggler"-->
      <!--              data-bs-target="#navbarSupportedContent"-->
      <!--              data-bs-toggle="collapse"-->
      <!--              type="button"-->
      <!--          >-->
      <!--            <span class="navbar-toggler-icon"> </span>-->
      <!--          </button>-->
      <!--          <div id="navbarSupportedContent" class="collapse navbar-collapse">-->
      <!--            <ul class="nav navbar-nav me-auto mb-2 mb-lg-0">-->
      <!--              <li class="nav-item">-->
      <nav id="main_nav">
        <ul class="semantic_list">
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="/courses">Courses</router-link>
            <ul>
              <li><router-link to="/ece6254">ECE 6254</router-link></li>
              <li><router-link to="/ece6271">ECE 6271</router-link></li>
            </ul>
          </li>
          <li><router-link to="/lab">Lab</router-link></li>
          <li><router-link to="/consulting">Consulting</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
        <!--          </ul>-->
        <!--          <form class="d-flex">-->
        <!--            <input-->
        <!--                aria-label="Search"-->
        <!--                class="form-control me-2"-->
        <!--                placeholder="Search"-->
        <!--                type="search"-->
        <!--            />-->
        <!--            <button class="btn btn-outline-success" type="submit">-->
        <!--              Search-->
        <!--            </button>-->
        <!--          </form>-->
        <!--        </div>-->
        <!--      </div>-->
      </nav>
    </header>

    <!-----------------
    -   Router View   -
    ------------------>

    <router-view />

    <!------------
    -   Footer   -
    ------------->

    <footer class="section_3">
      <div class="footer_content_nav">
        <h2>Contents</h2>
        <nav class="footer_nav">
          <ul class="semantic_list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/courses">Courses</router-link></li>
            <li><router-link to="/lab">Lab</router-link></li>
            <li><router-link to="/consulting">Consulting</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </nav>
      </div>

      <div class="footer_courses_sub_nav">
        <h2>Courses</h2>
        <nav class="footer_nav">
          <ul class="semantic_list">
            <li><router-link to="/ece6254">ECE 6254</router-link></li>
            <li><router-link to="/ece6271">ECE 6271</router-link></li>
          </ul>
        </nav>
      </div>

      <div class="footer_resources_nav">
        <h2>Qualifications</h2>
        <nav class="footer_nav">
          <ul class="semantic_list">
            <li>
              <a href="src/assets/CV/andersonCV2020.pdf" target="_blank"
                >Curriculum Vitae</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style>
/**************
*   Default   *
**************/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video /* eslint-disable-line */ {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section /* eslint-disable-line */ {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/**************
*   General   *
**************/

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
/*@media screen and (max-width: 700px) {*/
/*  !*  .row, .navbar {*/
/*        flex-direction: column;*/
/*      }*!*/
/*  :root {*/
/*    --size_adjustment: 1;*/
/*  }*/
/*}*/

* {
  box-sizing: border-box;
}

body {
  background-color: rgb(128, 128, 128);
  font-family: sans-serif;

  --size_adjustment: 1.5;
  --header_height: calc(200px * var(--size_adjustment));
  --name_plate_height: calc(
    2.5 * var(--size_adjustment)
  ); /* with 3 in header, use 2.5 */

  --institution_name_height: calc(2.1 * var(--size_adjustment));
  --nav_height: calc(
    (4.7) * var(--size_adjustment)
  ); /* with 3 in header, use 4.125 = 33/8, for 2 use 6.25 = 50/8 = 25/4 */

  /*display: grid;*/
  /*grid-template-columns: repeat(1, 1fr);*/
  /*grid-auto-rows: minmax(100%, auto);*/
  /*grid-template-areas:*/
  /*  "header"*/
  /*  "section"*/
  /*  "footer";*/
}

.flexbox_container {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

/**************
*   Heading   *
**************/

a,
img {
  color: white;
  text-decoration: none;
  width: 100%;
}

img,
header {
  background-color: rgb(0, 48, 86);
  height: var(--header_height);
  outline: 1px solid black;
}

header {
  /*grid-area: header;*/
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(30%, auto);
  grid-template-areas:
    "img np   np"
    "img in   in"
    "img mnav mnav";
}

img {
  grid-area: img;
  font-size: 25px;
}

#name_plate {
  grid-area: np;
}

#main_nav {
  grid-area: mnav;
}

#name_plate,
#institution_name,
#main_nav {
  text-align: center;
  outline: 1px solid black;
}

/*.router-view {*/
/*  grid-area: section;*/
/*}*/

/*section {*/
/*  grid-area: section;*/
/*}*/

#name_plate,
a.name_plate {
  font-size: 25px;
  line-height: var(--name_plate_height);
  color: rgb(179, 163, 109);
}

#institution_name {
  grid-area: in;
  background-color: rgb(179, 163, 109);
  color: rgb(0, 48, 86);
  font-size: 30px;
  line-height: var(--institution_name_height);
  text-overflow: ellipsis;
}

#main_nav > ul {
  display: flex;
  flex-flow: row nowrap;
}

#main_nav > ul > li {
  width: 20%;
  line-height: var(
    --nav_height
  ); /*Changes the box height!!! original was 4.125*/
  outline: 1px solid black;
}

#main_nav a {
  display: block;
}

#main_nav a:link,
#main_nav a:visited,
#main_nav a:focus {
  background: rgb(128, 128, 128);
}

#main_nav a:hover {
  background: rgb(110, 110, 110);
  color: black;
}

#main_nav a:active {
  background: rgb(100, 100, 100);
}

/**************
*   Section   *
**************/

section {
  margin: 1rem 2%;
  height: 30.5rem;
}

section > div.flexbox_container li {
  padding: 3px; /*padding: 2.5px;*/
  padding-left: 40px;
}

h2 {
  font-size: 20px;
  text-align: center;
}

h3 {
  font-size: 19px;
  /*font-weight: medium;*/
  text-align: center;
}

h4 {
  text-align: left;
  font-weight: bold;
}

p {
  text-align: justify;
}

/*****************
*   Navigation   *
*****************/

/*** Sub Menu ***/

nav li ul {
  position: absolute;
  display: none;
  padding-top: 1px;
  width: 13.4%; /*As a default*/
  /*width: calc(14% + 1px);*/
  transform: translateX(-1px);
}

nav li:hover ul {
  display: block;
  z-index: 1;
}

nav li ul li {
  border: 1px solid black;
  border-top: none;
  clear: both;
}

/************
*   Aside   *
************/

aside,
article {
  margin-top: 2%;
  padding: 15px;
  background-color: rgb(160, 160, 160);
}

aside h2 {
  font-weight: bold;
}

/**************
*   Article   *
**************/

article {
  width: 49%;
}

article li {
  list-style-position: inside;
}

article > ul {
  list-style-type: disc;
}

article ul ul li {
  list-style-type: circle;
}

article ol {
  list-style-type: decimal;
}

article ol,
article ul {
  text-align: left;
}

article a {
  color: blue;
  text-decoration: underline;
}

section.index_section article a {
  color: black;
  text-decoration: none;
}

/*   ECE 6254 Specifications   */

section > div > div {
  order: 8;
  margin-top: 1.1%;
  width: 49%;
}

section > div > div > article {
  width: 100%;
}

article.article_exam {
  margin-top: 4.2%; /*align-self: flex-end;*/
}

article.article_homework ul ul li {
  padding-left: 100px;
}

article.article_homework > ul > li {
  list-style-type: none;
}

/*article.article_schedule>ul{ font-weight: bold; }*/

span.red {
  color: rgb(220, 25, 0);
}

/*************
*   Footer   *
*************/

footer {
  position: relative;
  /*grid-area: footer;*/
  display: flex;
  border-top: 1px solid;
  flex-flow: row nowrap;
  padding-top: 10px;
  text-align: center;
  height: 7.5rem;
  width: 100%;
  min-width: 43.75rem;
}

footer div {
  width: calc(100% / 3);
}

/********************
*	  Media Screens   *
********************/
</style>
