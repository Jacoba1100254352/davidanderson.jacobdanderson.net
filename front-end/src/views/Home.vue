<template>
  <!-------------
  -   Section   -
  -------------->

  <section class="Home text-center section_2 index_section">
    <!--   Aside   -->

    <aside class="flexbox_container">
      <figure>
        <img
            id="prof_pic"
            alt="David Anderson"
            src="../../public/Images/David-Anderson-Professional-Pic.jpg"
        />
<!--        <figcaption>David Anderson</figcaption>-->
      </figure>

<!--      <h1 id="name_plate">
        <router-link class="name_plate" to="/about">David Anderson</router-link>
      </h1>-->
      <p>This is about me...</p>
    </aside>

    <hr>

    <!--   Articles   -->

    <div class="flexbox_container">
      <article class="article_1">
        <h2>Recent Publications</h2>
        <br />
        <ol>
          <li><a href="#">PublicationTitle1</a></li>
          <li><a href="#">PublicationTitle2</a></li>
          <li><a href="#">PublicationTitle3</a></li>
          <li><a href="#">PublicationTitle4</a></li>
          <li><a href="#">PublicationTitle5</a></li>
        </ol>
      </article>

      <article class="article_2">
        <h2><router-link to="/courses">ECE 4270</router-link></h2>
        <br />
        <ul>
          <li>
            <h4>
              Current Courses
              <!-- Currently Taught -->
            </h4>
            <ul>
              <li><router-link to="/ece6254">ECE 6254</router-link></li>
            </ul>
          </li>
          <li>
            <h4>
              Previous Courses
              <!-- Previously Taught -->
            </h4>
            <ul>
              <li><router-link to="/courses">ECE 4270</router-link></li>
              <li><router-link to="/courses">ECE 4271</router-link></li>
              <li><router-link to="/courses">ECE 2026</router-link></li>
              <li><router-link to="/courses">ECE 3055</router-link></li>
              <li><router-link to="/courses">ECE 6250</router-link></li>
              <li><router-link to="/courses">ECE 6253</router-link></li>
              <li><router-link to="/courses">ECE 6271</router-link></li>
              <li><router-link to="/courses">ECE 7252</router-link></li>
              <li><router-link to="/courses">ECE 2030</router-link></li>
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

<style scoped>

img {
  width: 50%;
  /*height: 25%;*/
  font-size: calc((25px) * var(--text_scalar));
}

article a { /*section.index_section article a*/
  color: black;
  text-decoration: none;
}

figure {
  height: 100%;
}

figure, p {
  width: 50%;
  text-align: center;
}

</style>
