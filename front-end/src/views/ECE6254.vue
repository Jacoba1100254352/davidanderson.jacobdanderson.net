<template>
  <!-------------
  -   Section   -
  -------------->

  <section class="ECE6254 text-center section_2 ece6254_section">
    <!--   Aside   -->

    <aside>
      <h2>ECE 6254 - Statistical Machine Learning</h2>
      <h3>Spring 2020</h3>
      <p>
        This course will provide an introduction to the theory of statistical
        learning and practical machine learning algorithms with applications in
        signal processing and data analysis. In contrast to most traditional
        approaches to statistical inference and signal processing, in this
        course we will focus on how to learn effective models from data and how
        to apply these models to practical signal processing problems. We will
        approach these problems from the perspective of statistical inference.
        We will study both practical algorithms for statistical inference and
        theoretical aspects of how to reason about and work with probabilistic
        models. We will consider a variety of applications, including
        classification, prediction, regression, clustering, modeling, and data
        exploration/visualization.
      </p>
    </aside>

    <!--   Sub Menu   -->

    <nav class="local">
      <ul class="flexbox_container" id="real_list">
        <li><a href="#links">Reference Links</a></li>
        <li><a href="#hours">Office Hours</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#homework">Homework</a></li>
        <li><a href="#guidelines">Homework Guidelines</a></li>
        <li><a href="#extra_resources">Extra Reading and Practice</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#exam_info">Exam Info</a></li>
      </ul>

      <!-- Note: this is a pseudo container, for design only -->
      <ul class="flexbox_container" id="pseudo_list">
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
      </ul>
    </nav>

    <!--   Articles   -->

    <div class="flexbox_container">
      <article class="article_links" id="links">
        <h2>Important Links and Information</h2>
        <br />
        <ul>
          <li>
            <a href="src/assets/ece6254/syllabus-6254-sp18.pdf">Syllabus</a>
          </li>
          <li>
            <a href="#schedule">Lecture Notes</a>
          </li>
          <li>
            <a
              href="https://t-square.gatech.edu/portal/site/gtc-f7ce-a488-5d20-82a4-998c37946012"
              >T-Square (grades)</a
            >
          </li>
          <li>
            <a href="https://piazza.com/gatech/spring2018/ece6254/home"
              >Piazza class discussion site</a
            >
          </li>
        </ul>
        <br />
        <!-- <p>Note: Watch <a href="https://piazza.com/gatech/spring2018/ece6254/home">Piazza</a> for information about assignments.</p> -->
      </article>

      <article class="article_hours" id="hours">
        <h2>Office Hours</h2>
        <br />
        <ul>
          <li>Dr. Anderson: M F 9:00-10:30 in TSRB 543</li>
          <li>You Wang: T 2:00-5:00 TSRB 5th floor landing near stairs</li>
          <li>
            Andrew McRae: F 10:00-1:00 TSRB 5th floor landing near stairs<br /><br />
          </li>
        </ul>
      </article>

      <article class="article_resources" id="resources">
        <h2>Resources</h2>
        <br />
        <h4>Resources</h4>
        <ul>
          <li>
            A short, useful introduction to
            <a
              href="http://www.atmos.washington.edu/~dennis/MatrixCalculus.pdf"
              target="_blank"
              >Matrix Calculus</a
            >
          </li>
          <li>
            The
            <a href="src/assets/ece6254/matrix_cookbook.pdf" target="_blank"
              >Matrix Cookbook</a
            >
          </li>
          <li>
            <a href="http://bit.ly/PaBJmu"
              >Khan Academy lectures on probability</a
            >
          </li>
          <li>
            <a href="http://bit.ly/1lMgs0G"
              >Khan Academy lectures on linear algebra</a
            >
          </li>
          <li>
            <a href="http://cs229.stanford.edu/materials.html"
              >Machine learning</a
            >
            as taught by Andrew Ng
          </li>
          <li>
            <a href="http://ciml.info/">Machine learning</a> as taught by Hal
            Daumé
          </li>
          <li>
            <a href="http://work.caltech.edu/telecourse.html"
              >Machine learning</a
            >
            as taught by Yaser Abu-Mostafa (the Caltech course based on Learning
            from Data)
          </li>
          <li>
            <a href="http://www.thetalkingmachines.com/">Talking machines</a>:
            An interesting podcast about machine learning
          </li>
        </ul>
        <br />

        <h4>Python Resource</h4>
        <ul>
          <li>
            <a href="https://www.continuum.io/downloads">Anaconda</a> Python
            distribution
          </li>
          <li>
            <a href="https://www.python.org/">Official Python documentation</a>
          </li>
          <li>
            <a href="https://developers.google.com/edu/python/"
              >Google's Python class</a
            >
          </li>
          <li>
            <a href="http://www.learnpython.org/">Another Python tutorial</a>
          </li>
          <li>
            <a href="https://docs.scipy.org/doc/numpy-dev/user/quickstart.html"
              >SciPy tutorial</a
            >
          </li>
          <li>
            <a
              href="https://docs.scipy.org/doc/numpy-dev/user/numpy-for-matlab-users.html"
              >NumPy for Matlab users</a
            >
          </li>
          <li>
            <a
              href="http://www.astro.up.pt/~sousasag/Python_For_Astronomers/Python_qr.pdf"
              >Python quick reference sheet</a
            >
          </li>
          <li>
            <a href="http://scikit-learn.org/stable/">scikit-learn</a>
          </li>
          <li>
            Python for Data Analysis, McKinney, 2012. (<a
              href="http://amzn.to/2jfrRxQ%22"
              >Amazon</a
            >)
          </li>
        </ul>
        <br />

        <h4>General Interest</h4>
        <ul>
          <li>
            <a
              href="http://www4.ncsu.edu/unity/lockers/users/f/felder/public/Columns/memo.pdf"
              >Taking Tests</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLcZOnmyqlalboVita4LlxDdgrq4l9NF9e"
              >Careers in Signal Processing</a
            >
          </li>
        </ul>
      </article>

      <article class="article_homework" id="homework">
        <h2>Homework Assignments</h2>
        <br />
        <ul>
          <li>
            <a href="src/assets/ece6254/pretest-6254-2018.pdf"
              >Pretest (HW 0)</a
            >

            <ul>
              <!-- <li><ul><li><ul><li><ul> -->
              <li>
                due <span class="red">Monday, January 22</span> in class (at the
                beginning) for Atlanta students
              </li>
              <li>due Wednesday, January 24 for remote students</li>
            </ul>
            <!-- </li></ul></li></ul></li></ul> -->
          </li>
          <li>
            <a href="src/assets/ece6254/hw01-6254-sp18.pdf">Homework #1</a>

            <ul>
              <!-- <li><ul><li><ul><li><ul> -->
              <li>
                <a href="src/assets/ece6254/hist-example.py">hist-example.py</a
                >,
                <a href="src/assets/ece6254/knn-example.py">knn-example.py</a>
              </li>
              <li>due Monday, February 5 in class for Atlanta students</li>
              <li>due Monday, February 12 for remote students</li>
            </ul>
            <!-- </li></ul></li></ul></li></ul> -->
          </li>
          <li>
            <a href="src/assets/ece6254/hw02-6254-sp18.pdf">Homework #2</a>

            <ul>
              <!-- <li><ul><li><ul><li><ul> -->
              <li>
                <a href="src/assets/ece6254/fedpapers_split.txt"
                  >fedpapers_split.txt</a
                >,
                <a href="src/assets/ece6254/knn-example.py">knn-example.py</a>,
                and <a href="src/assets/ece6254/lr-gd.py">lr-gd.py</a>
              </li>
              <li>due Wednesday, February 14 in class for Atlanta students</li>
              <li>
                due Monday, February 19 for remote students (submit via the
                <a
                  href="https://t-square.gatech.edu/portal/site/gtc-f7ce-a488-5d20-82a4-998c37946012/page/af53080f-d78f-45df-9f47-b4aa850815bf"
                  >Assignments tab in t-square</a
                >)
              </li>
            </ul>
            <!-- </li></ul></li></ul></li></ul> -->
          </li>
          <li>
            <a href="src/assets/ece6254/hw03-6254-sp18.pdf">Homework #3</a>
            (updated to make problem 3.1 clearer on 2/16)

            <ul>
              <!-- <li><ul><li><ul><li><ul> -->
              <li>due Monday, February 26 in class for Atlanta students</li>
              <li>
                due Monday, March 5 for remote students (submit via the
                <a
                  href="https://t-square.gatech.edu/portal/site/gtc-f7ce-a488-5d20-82a4-998c37946012/page/af53080f-d78f-45df-9f47-b4aa850815bf"
                  >Assignments tab in t-square</a
                >)
              </li>
            </ul>
            <!-- </li></ul></li></ul></li></ul> -->
          </li>
          <li>
            <a href="src/assets/ece6254/hw04-6254-sp18.pdf">Homework #4</a>

            <ul>
              <!-- <li><ul><li><ul><li><ul> -->
              <li>due Wednesday, March 28 in class for Atlanta students</li>
              <li>
                due Wednesday, April 4 for remote students (submit via the
                <a
                  href="https://t-square.gatech.edu/portal/site/gtc-f7ce-a488-5d20-82a4-998c37946012/page/af53080f-d78f-45df-9f47-b4aa850815bf"
                  >Assignments tab in t-square</a
                >)
              </li>
            </ul>
            <!-- </li></ul></li></ul></li></ul> -->
          </li>
          <li>
            <a href="src/assets/ece6254/hw05-6254-sp18.pdf">Homework #5</a> (the
            last!)

            <ul>
              <!-- <li><ul><li><ul><li><ul> -->
              <li>due Wednesday, April 18 in class for Atlanta students</li>
              <li>
                due Wednesday, April 25 for remote students (submit via the
                Assignments tab in t-square)
              </li>
            </ul>
            <!-- </li></ul></li></ul></li></ul> -->
          </li>
          <li>
            <a href="src/assets/ece6254/proposal-guideline-6254-sp18.pdf"
              >Class Project</a
            >
          </li>
        </ul>
      </article>

      <article class="article_guidelines" id="guidelines">
        <h2>Homework Guidelines<!--  for ECE 6254 --></h2>
        <br />
        <p>
          The application of learned principles, and practice, are essential to
          learning new material. An important part of an engineer’s training is
          to learn how to approach a problem logically and present the solution
          in a clear and coherent way. Accordingly, the following are guidelines
          that are aimed at improving the quality of homework submissions,
          facilitating learning, and helping the grader to quickly evaluate your
          submission.
        </p>
        <br />

        <h4>Guidelines</h4>
        <ul>
          <li>
            All answers must be clearly indicated (boxed if appropriate). It
            should be easy to identify the answer to each problem at a glance.
          </li>
          <li>
            Use sufficient paper. Cramming lines together and writing small make
            your work difficult to decipher. Consider your answer to be a
            presentation of your thought processes and work—make it orderly,
            neat, visually appealing, and convincing.
          </li>
          <li>Start each problem on a new page.</li>
          <li>
            Be as brief as possible but no briefer. It is important to get to
            the heart of a problem and not cloud your submission with fluff.
            However, leaving out important steps or information is not
            acceptable. Practice brevity while maintaining completeness.
          </li>
          <li>
            Put your name in the upper right corner along with the date and
            class (ECE 6254). This information should appear on every page of
            your submission. You may also use a cover sheet.
          </li>
          <li>
            Staple your submission. Folding the corners, etc., does not count.
          </li>
          <li>
            Keep your paper neat. Do not use paper with rough edges from being
            torn out of a notebook. Write on one side of your paper. Engineering
            paper is preferred but not required.
          </li>
          <li>Grading</li>
          <li>
            In order to facilitate more timely grading, a random subset of the
            homework problems will be graded each week. You are encouraged to
            study the solutions for every problem and compare with your own.
          </li>
        </ul>
        <br />

        <h4>Turn-in</h4>
        <ul>
          <li>
            <b>Atlanta students</b> - Assignments are to be turned in at the
            beginning of class on the due date
          </li>
          <li>
            <b>Remote students</b> - Assignments are to be turned in by 9:00 PM
            on the corresponding due date (usually one week later than the
            Atlanta section).
            <ul>
              <li>
                There is a change in the submission process: the assignments are
                to be scanned and uploaded to the
                <a
                  href="https://t-square.gatech.edu/portal/site/gtc-f7ce-a488-5d20-82a4-998c37946012/page/af53080f-d78f-45df-9f47-b4aa850815bf"
                  >t-square assignments tab</a
                >.
              </li>
              <li>
                The scans should be <strong>high quality scans</strong> and
                should be in a <strong>single PDF file</strong> (where required,
                code may be in a separate file).
              </li>
              <li>
                If you use a cell-phone camera to scan make sure that you use a
                scanner app that crops to the paper, removes shadows, and
                generally creates a high quality scan that is easily printable.
              </li>
            </ul>
          </li>
        </ul>
      </article>

      <article class="article_extra" id="extra_resources">
        <h2>Extra Reading and Practice</h2>
        <br />
        <h4>Practice Problems</h4>
        <ul>
          <li>
            <a href="src/assets/ece6254/sampleproblems.pdf"
              >Midterm practice problems</a
            >
          </li>
          <li>
            <a href="#resources"
              >Some linear algebra and other problems from ECE 6250</a
            >
            <ul>
              <li>
                The linked problem sets can be found here (the links on the 6250
                site are behind a wall). Also, when not specified, the text
                links are to Moon &amp; Stirling's
                <i>Mathematical Methods and Algorithms for Signal Processing</i
                >.
                <ul>
                  <li>
                    <a
                      href="https://t-square.gatech.edu/access/content/group/gtc-f7ce-a488-5d20-82a4-998c37946012/LinearAlgebraPracticeProblems/chapter4problems.pdf"
                      >Chapter 4 Problems</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://t-square.gatech.edu/access/content/group/gtc-f7ce-a488-5d20-82a4-998c37946012/LinearAlgebraPracticeProblems/chapter5problems.pdf"
                      >Chapter 5 Problems</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://t-square.gatech.edu/access/content/group/gtc-f7ce-a488-5d20-82a4-998c37946012/LinearAlgebraPracticeProblems/chapter6problems.pdf"
                      >Chapter 6 Problems</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://t-square.gatech.edu/access/content/group/gtc-f7ce-a488-5d20-82a4-998c37946012/LinearAlgebraPracticeProblems/chapter7problems.pdf"
                      >Chapter 7 Problems</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://t-square.gatech.edu/access/content/group/gtc-f7ce-a488-5d20-82a4-998c37946012/LinearAlgebraPracticeProblems/chapter8problems.pdf"
                      >Chapter 8 Problems</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <br />

        <h4>Papers</h4>
        <ul>
          <li>
            <a href="src/assets/ece6254/slt-bbl.pdf"
              >Introduction to Statistical Learning Theory</a
            >, Bousquet, Boucheron, and Lugosi, 2004.
          </li>
        </ul>
        <br />
        <h4>Books on statistical learning</h4>
        <br /><br />
        <h4>Books covering background material</h4>
        <ul>
          <li>
            <i>How to Solve It</i>, Polya, 1945. Classic introduction to
            mathematical problem solving. (<a href="http://amzn.to/1IyE2Yc"
              >Amazon</a
            >)
          </li>
          <li>
            <i>Introduction to Probability</i>, Bertsekas and Tsitsiklis, 2008.
            Good introduction to elementary probability theory. (<a
              href="http://amzn.to/YRPH3x"
              >Amazon</a
            >)
          </li>
          <li>
            <i>An Introduction to Probability Theory and its Applications</i>,
            Feller, 1950. An absolute classic. A more advanced (but still
            accessible) introduction to probability theory. (<a
              href="http://amzn.to/19kOOjf"
              >Amazon</a
            >)
          </li>
          <li>
            <i>The Art of Probability</i>, Hamming, 1994. Another introduction
            to probability theory written by a fellow engineer. (<a
              href="http://amzn.to/126Zyiu"
              >Amazon</a
            >)
          </li>
          <li>
            <i>All of Statistics</i>, Wasserman, 2004. Exactly what the title
            says. (<a href="http://amzn.to/18GIDsc">Amazon</a>)
          </li>
          <li>
            <i>Linear Algebra and Its Applications</i>, Strang, 2005. A great
            introduction to linear algebra. (<a href="http://amzn.to/1jdXKxt"
              >Amazon</a
            >)
          </li>
          <li>
            <i>Convex Optimization</i>, Boyd, 2004. We will cover the tools from
            convex optimization that we need as part of the course, but if you
            want to know more, this is a great resource targeted towards
            electrical engineers. (<a
              href="http://www.stanford.edu/~boyd/cvxbook/"
              >Free online version</a
            >, <a href="http://amzn.to/1flib7J">Amazon</a>)<br /><br />
          </li>
        </ul>
      </article>

      <article class="article_schedule" id="schedule">
        <h2>Schedule</h2>
        <br />
        <h4>
          <i><u>PDF versions of the lecture notes</u></i>
        </h4>
        <br />
        <h4><b>Introductory supervised learning</b></h4>
        <ul>
          <li>
            <a href="src/assets/ece6254/01-intro.pdf">Course Introduction</a>
            (January 10 &amp; 22)
            <ul>
              <li>
                <a href="src/assets/ece6254/03-bayes-nearest-neighbors-4up.pdf"
                  >4 slides per page for </a
                ><a href="src/assets/ece6254/01-intro-4up.pdf">printing</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/02-first-model-of-learning.pdf"
              >A first model of learning: Concentration inequalities and
              generalization bounds</a
            >
            (January 22)
            <ul>
              <li>
                <a href="src/assets/ece6254/02-first-model-of-learning-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/02-notes-6254-sp17.pdf">Notes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/03-bayes-nearest-neighbors.pdf"
              >The Bayes classifier and nearest neighbors classifiers</a
            >
            (January 22 &amp; 24)
            <ul>
              <li>
                <a href="src/assets/ece6254/03-bayes-nearest-neighbors-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/03-notes-6254-sp17.pdf">notes</a>
              </li>
              <li>
                <a href="src/assets/ece6254/03-bayes-nearest-neighbors-2018.pdf"
                  >Updated Lecture</a
                >
                (January 24)
              </li>
              <li>
                <a
                  href="src/assets/ece6254/03-bayes-nearest-neighbors-2018-4up.pdf"
                  >Updated Lecture with 4 slides per page for printing</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/04-plugin-rules.pdf">Plugin Methods</a>
            (January 24)
            <ul>
              <li>
                <a href="src/assets/ece6254/04-plugin-rules-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/04-notes-6254-sp17.pdf">Notes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/05-logistic-regression.pdf"
              >Plugin Methods II: Logistic Regression</a
            >
            (January 31)
            <ul>
              <li>
                <a href="src/assets/ece6254/05-logistic-regression-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/05-grad-descent.pdf"
                  >notes on grad descent</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/05-newtons-method.pdf"
                  >notes on Newton's method</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/06-np-linear-classifiers.pdf"
              >Non-parametric Linear Classifiers (perceptron &amp; max margin
              hyperplanes)</a
            >
            (January 31-Feb 5)
            <ul>
              <li>
                <a href="src/assets/ece6254/06-np-linear-classifiers-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/07-kernels-marked.pdf">Kernels</a> (Feb
            7)
            <ul>
              <li>
                <a href="src/assets/ece6254/07-kernels-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/07-notes-6254-sp17.pdf">Notes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/08-svms-marked.pdf"
              >Support Vector Machines</a
            >
            (Feb 12)
            <ul>
              <li>
                <a href="src/assets/ece6254/08-svms-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/svm-handwritten.pdf"
                  >In-class notes on SVMs</a
                >
                (updated 2/14)
              </li>
              <li>
                <a href="src/assets/ece6254/08-notes-6254-sp17.pdf">Notes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/09-theory-of-generalization.pdf"
              >Theory of generalization: Dichotomies, the growth function,
              shattering, and break points</a
            >
            (Feb 14)
            <ul>
              <li>
                <a href="src/assets/ece6254/09-theory-of-generalization-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/15-16-learning-theory.pdf"
                  >some other slides from USC that cover this material well</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/10-theory-of-generalization-2.pdf"
              >Theory of generalization 2: The Vapnik-Chervonenkis
              generalization bound</a
            >
            (Feb 19)
            <ul>
              <li>
                <a
                  href="src/assets/ece6254/10-theory-of-generalization-2-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/10-notes-6254-sp17.pdf">Notes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/11-regression-regularization.pdf"
              >Regression, least squares, and Tikhonov regularization</a
            >
            (Feb 21)
            <ul>
              <li>
                <a
                  href="src/assets/ece6254/11-regression-regularization-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/13-bias-variance-marked.pdf"
              >Bias and Variance of regression function sets</a
            >
            (Feb 26)
            <ul>
              <li>
                <a href="src/assets/ece6254/13-bias-variance-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/12-regularization-2.pdf"
              >The LASSO, robust regression, kernel regression, and
              regularization in classification</a
            >
            (Feb 28)
            <ul>
              <li>
                <a href="src/assets/ece6254/12-regularization-2-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
              <li>
                <a href="src/assets/ece6254/12-notes-6254-sp17.pdf">Notes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="src/assets/ece6254/14-model-selection-validation.pdf"
              >Model Selection and Validation</a
            >
            (Mar 5)
            <ul>
              <li>
                <a
                  href="src/assets/ece6254/14-model-selection-validation-4up.pdf"
                  >4 slides per page for printing</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </article>

      <div class="flexbox_container" id="schedule_exam">
        <article class="article_schedule" id="schedule2">
          <h2>Schedule</h2>
          <br />
          <h4><b>Introductory unsupervised learning</b></h4>
          <ul>
            <li>
              <a href="src/assets/ece6254/15-dr-fs-pca.pdf"
                >Dimensionality reduction, feature selection, and principal
                component analysis</a
              >
              (Mar 12)
              <ul>
                <li>
                  <a href="src/assets/ece6254/15-dr-fs-pca-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
                <li>
                  <a href="src/assets/ece6254/15-notes-6254-sp17.pdf">Notes</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/16-mds-nonlineardr.pdf"
                >Multidimensional scaling</a
              >
              (Mar 14)
              <ul>
                <li>
                  <a href="src/assets/ece6254/16-mds-nonlineardr-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/17-nonlineardr-2-marked.pdf"
                >Nonlinear dimensionality reduction</a
              >
              (Mar 26)
              <ul>
                <li>
                  <a href="src/assets/ece6254/17-nonlineardr-2-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/18-smf.pdf"
                >Structured matrix factorization</a
              >
              (Mar 28-Apr 2)
              <ul>
                <li>
                  <a href="src/assets/ece6254/18-smf-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
                <li>
                  <a href="src/assets/ece6254/18-notes-6254-sp17.pdf">Notes</a>
                </li>
                <li>
                  <a href="src/assets/ece6254/ksvd-notes.pdf"
                    >Extra notes on k-SVD</a
                  >
                </li>
                <li>
                  <a
                    href="src/assets/ece6254/aharon%2c-elad%2c-bruckstein---2006---k--svd-an-algorithm-for-designing-overcomplete-dictionaries-for-sparse-representation.pdf"
                    >Paper on k-SVD</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/19-kde-k-means-marked.pdf"
                >Kernel density estimation and k-means clustering</a
              >
              (Apr 4)
              <ul>
                <li>
                  <a href="src/assets/ece6254/19-kde-k-means-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/20-gmms-em-marked.pdf"
                >Gaussian mixture models and expectation maximization</a
              >
              <ul>
                <li>
                  <a href="src/assets/ece6254/20-gmms-em-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/21-sc-hc-dbc.pdf"
                >Spectral clustering, density-based clustering, and hierarchical
                clustering</a
              >
              <ul>
                <li>
                  <a href="src/assets/ece6254/21-sc-hc-dbc-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <br />

          <h4><b>Advanced Topics</b></h4>
          <ul>
            <li>
              <a href="src/assets/ece6254/22-decision-trees.pdf"
                >Decision trees</a
              >
              <ul>
                <li>
                  <a href="src/assets/ece6254/22-decision-trees-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/23-ensemble-methods.pdf"
                >Ensemble methods</a
              >
              <ul>
                <li>
                  <a href="src/assets/ece6254/23-ensemble-methods-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/24-neural-networks.pdf"
                >Neural networks</a
              >
              <ul>
                <li>
                  <a href="src/assets/ece6254/24-neural-networks-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="src/assets/ece6254/25-deep-learning.pdf"
                >Deep learning</a
              >
              <ul>
                <li>
                  <a href="src/assets/ece6254/25-deep-learning-4up.pdf"
                    >4 slides per page for printing</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </article>

        <!-- 					<article class="article_filler" id="space_filler">
                      <h2>Space-Filler</h2><br>
                      <p>Watch Piazza for information about assignments.</p>
                    </article> -->

        <article class="article_exam" id="exam_info">
          <h2>Exam Info</h2>
          <br />
          <h4>
            <b><u>Exam Schedule:</u></b>
          </h4>
          <ul>
            <li>
              A very rough schedule of the lectures is at
              <a href="https://goo.gl/nNJ9J7">https://goo.gl/nNJ9J7</a>
            </li>
            <li>Midterm - Wednesday, March 7 (GTL - Monday, March 12)</li>
            <li>Final Exam -- Wednesday, May 2 at 2:50 PM - 5:40 PM</li>
          </ul>
          <br />

          <h4><u>Midterm Exam Information:</u></h4>
          <ul>
            <li>A single sheet of notes (front and back) allowed</li>
            <li>75 minute time limit (3:00 PM - 4:15 PM)</li>
            <li>No calculators allowed</li>
            <li>
              Sample questions are posted under the
              <a href="#resources">Resources</a> tab
            </li>
            <li>
              The midterm exam will cover material up through HW #3 and the
              lecture on the VC bound (from Feb 19).
            </li>
            <!-- <li>
                <a href="https://t-square.gatech.edu/access/content/group/gtc-f7ce-a488-5d20-82a4-998c37946012/Solutions/midterm-6254-2018-sol.pdf">Solutions</a>
              </li> -->
          </ul>
        </article>
      </div>
    </div>
<!--    <br />-->
  </section>
</template>

<script>
export default {
  name: "ECE6254",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
/*****************
*   Navigation   *
*****************/

nav.local {
  position: relative;
  margin-top: 2%;
}

nav.local li {
  width: calc(100% / 8);
}

nav.local a {
  color: black;
  display: block;
  padding: 3%;
}

ul.flexbox_container {
  flex-wrap: nowrap;
}

li.pseudo_element {
  outline: 1px solid;
  background-color: var(--common_background_color);
}

#pseudo_list li {
  min-width: 80px;
}

#pseudo_list {
  position: absolute;
  width: 100%;
  top: 0;
}

#real_list,
#real_list li {
  text-align: center;
  align-items: center;
  z-index: 1;
}

nav.local, #pseudo_list, #real_list {
  height: 3rem;
}

/**************
*   Article   *
**************/
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

article > ul {
  list-style-type: disc;
}

/*article.article_schedule>ul{ font-weight: bold; }*/

/*******************
*   Miscelaneous   *
*******************/
span.red {
  color: rgb(220, 25, 0);
}

/********************
*	  Media Screens   *
********************/

@media only screen and (min-width: 1px) and (max-width: 960px) {

  article, #schedule_exam {
    width: 100%;
  }

  #exam_info, #schedule2 {
    margin-top: 2%;
  }

  #schedule {
    margin-bottom: 0;
  }

  #schedule_exam {
    margin-top: 0;
  }

  ul.flexbox_container {
    flex-wrap: wrap;
  }

  nav.local li {
    width: calc(100% / 4);
  }

  nav.local, #pseudo_list, #real_list {
    height: 6rem;
  }

}

</style>
