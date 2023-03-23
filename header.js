const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    #nav{
      border:1px solid grey;
      border-width:1px 0;
      list-style:none;
      margin:0;
      padding:0;
      text-align:center;
	  font-size: 11px;
	  font-family:Martian Mono;
    }
    #nav li{
      position:relative;
      display:inline;
    }
    #nav a{
      display:inline-block;
      padding:5px 10px;
    }
    #nav ul{
      position:absolute;
      /*top:100%; Uncommenting this makes the dropdowns work in IE7 but looks a little worse in all other browsers. Your call. */
      left:-9999px;
      margin:0;
      padding:0;
      text-align:left;
    }
    #nav ul li{
      display:block;
    }
    #nav li:hover ul{
      left:0;
    }
    #nav li:hover a{
      text-decoration:underline;
      background:#f1f1f1;
    }
    #nav li:hover ul a{
      text-decoration:none;
      background:solid;
    }
    #nav li:hover ul a:hover{
      text-decoration:underline;
      background:#f1f1f1;
    }
    #nav ul a{
      white-space:normal;
      display:block;
      border-bottom:1px solid #ccc;
    }
    a{
      color:#c00;
      text-decoration:none;
      font-weight:bold;
    }
    a:hover{
      text-decoration:underline;
      background:#f1f1f1;
    }
  </style>
  

  <header>
    <ul id="nav">

<li>
<a href="index.html">Notes</a>
</li>

<li>
<a href="#">Slides</a>
<ul>
	<li><a href="01.html">1. Introduction</a></li>
	<li><a href="02.html">2. Descriptive stats</a></li>
	<li><a href="03.html">3. Inferential stats</a></li>
	<li><a href="04.html">4. Correlation & Probability distribution</a></li>
	<li><a href="05.html">5. Linear regression</a></li>
	<li><a href="06.html">6. Sampling, Validity & Reliability</a></li>
</ul>
</li>

<li>
<a href="#">Index</a>
<ul>
	<li><a href="10.html">CI and p-value</a></li>
	<li><a href="11.html">Epidemiology measures</a></li>
	<li><a href="14.html">FAQ</a></li>
	<li><a href="07.html">Observational research</a></li>
	<li><a href="12.html">Standardization</a></li>
	<li><a href="09.html">Statistical power</a></li>
	<li><a href="08.html">Systematic review & Meta analysis</a></li>
</ul>
</li>

<li>
<a href="#">Appraisal</a>
<ul>
	<li><a href="13.html">Cross-sectional</a></li>
	<li><a href="15.html">Cohort</a></li>
</ul>
</li>

</ul>
  </header>
`;

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);