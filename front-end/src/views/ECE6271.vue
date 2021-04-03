<template>
  <!-------------
  -   Section   -
  -------------->

  <section class="ECE6271 text-center section_2 ece6271_section">
    <!--   Aside   -->

    <aside>
      <h2>ECE 6271 - Adaptive Filtering</h2>
      <h3>Summer 2018</h3>
      <p>
        The purpose of this course is for you to understand and learn how to use
        various types of adaptive filters. Adaptive filters are essential
        component for systems that work under the changing conditions in the
        real world.
      </p>
    </aside>

    <hr>

    <!--   Articles   -->

    <div class="flexbox_container">
      <article class="article_1">
        <h2>Title</h2>
        <h4>This semester coverage will include:</h4>
        <ul>
          <li>Gradient search algorithms</li>
          <li>LMS (least mean square) adaptive filters and variations</li>
          <li>RLS (recursive least square) adaptive filters</li>
          <li>Kalman filters</li>
          <li>Particle filters</li>
          <li>Adaptive Wiener filters</li>
          <li>... and applications</li>
        </ul>
      </article>

      <article class="article_2">
        <h2>Important Links and Information</h2>
        <ul>
          <li>
            <a href="src/assets/ece6271/ece-6271-syllabus.pdf">Syllabus</a>
          </li>
          <li>
            <a href="#schedule">Calendar and handouts</a>
          </li>
          <li>
            <a href="#notes">Lecture Notes</a>
          </li>
          <li>Prof. Anderson's schedule</li>
          <li>
            <a href="#resources">Other resources</a>
          </li>
          <li>Canvas (grades)</li>
          <li>
            <a href="https://piazza.com/class/ijltgsqappvfe">Piazza</a> class
            discussion site
          </li>
        </ul>
      </article>

      <article class="article_3">
        <h2>Adaptive Filtering Resources</h2>
        <ul>
          <li>
            <a href="http://www.cs.unc.edu/~welch/kalman/"
              >The Kalman Filter page</a
            >
          </li>
          <li>
            <a href="src/assets/ece6271/trsap-particlefiltertutorial.pdf"
              >Particle Filter Tutorial</a
            >
          </li>
          <li>
            <a
              href="http://iracema.icsl.ucla.edu/index.php?option=com_content&task=view&sectionid=10&id=214"
              >Video Lectures from Ali Sayed</a
            >(also has Matlab code)
          </li>
          <li>
            A short, useful introduction to
            <a href="src/assets/ece6271/MatrixCalculus.pdf">Matrix Calculus</a>
          </li>
          <li>
            Neural Networks tutorial (<a
              href="http://lumiverse.io/series/neural-networks-demystified"
              >Neural Networks Demystified</a
            >)
          </li>
          <li>
            <i>
              If you find anything useful, let me know and I'll link it here
            </i>
          </li>
        </ul>
      </article>

      <article class="article_4">
        <h2>Assignments</h2>
        <ul>
          <li>
            <a href="src/assets/ece6271/hw01.pdf"
              >Assignment #1 - Due Tuesday, May 22</a
            >
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ECE6271",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>

article > ul {
  list-style-type: disc;
}

</style>
