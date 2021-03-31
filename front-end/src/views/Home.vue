<template>
  <!-------------
  -   Section   -
  -------------->

  <section class="Home text-center section_2 index_section">
    <!--   Aside   -->

    <aside>
      <h2>Personal Summary</h2>
      <p>This is about me...</p>
    </aside>

    <!--   Articles   -->

    <div class="flexbox_container">
      <article class="article_1">
        <h2>Recent Publications</h2>
        <br />
        <ol>
          <li><a href="publications.html">PublicationTitle1</a></li>
          <li><a href="publications.html">PublicationTitle2</a></li>
          <li><a href="publications.html">PublicationTitle3</a></li>
          <li><a href="publications.html">PublicationTitle4</a></li>
          <li><a href="publications.html">PublicationTitle5</a></li>
        </ol>
      </article>

      <article class="article_2">
        <h2><a href="Previous HTML files/courses.html">Courses Taught</a></h2>
        <br />
        <ul>
          <li>
            <h4>
              Current Courses
              <!-- Currently Taught -->
            </h4>
            <ul>
              <li><a href="Previous HTML files/ece6254.html">ECE 6254</a></li>
            </ul>
          </li>
          <li>
            <h4>
              Previous Courses
              <!-- Previously Taught -->
            </h4>
            <ul>
              <li><a href="Previous HTML files/courses.html">ECE 4270</a></li>
              <li><a href="Previous HTML files/courses.html">ECE 4271</a></li>
              <li><a href="Previous HTML files/courses.html">ECE 2026</a></li>
              <li><a href="Previous HTML files/courses.html">ECE 3055</a></li>
              <li><a href="Previous HTML files/courses.html">ECE 6250</a></li>
              <li><a href="Previous HTML files/courses.html">ECE 6253</a></li>
              <li><a href="Previous HTML files/ece6271.html">ECE 6271</a></li>
              <li><a href="Previous HTML files/courses.html">ECE 7252</a></li>
              <li><a href="Previous HTML files/courses.html">ECE 2030</a></li>
            </ul>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
