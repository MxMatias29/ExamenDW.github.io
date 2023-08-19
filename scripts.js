document.addEventListener("DOMContentLoaded", function() {
    const extraContent = document.querySelector(".extra-content");
    const expandButton = document.querySelector(".expand-button");
    const collapseButton = document.querySelector(".collapse-button");
  
    extraContent.style.display = "none"; 
  
    function toggleText() {
      if (extraContent.style.display === "block") {
        extraContent.style.display = "none";
        expandButton.style.display = "block";
        collapseButton.style.display = "none";
      } else {
        extraContent.style.display = "block";
        expandButton.style.display = "none";
        collapseButton.style.display = "block";
      }
    }
  
    expandButton.addEventListener("click", toggleText);
    collapseButton.addEventListener("click", toggleText);
  });


  document.addEventListener("DOMContentLoaded", function() {
    const extraContent = document.querySelector(".extra-content2");
    const expandButton = document.querySelector(".expand-button2");
    const collapseButton = document.querySelector(".collapse-button2");
  
    extraContent.style.display = "none"; 
  
    function toggleText2() {
      if (extraContent.style.display === "block") {
        extraContent.style.display = "none";
        expandButton.style.display = "block";
        collapseButton.style.display = "none";
      } else {
        extraContent.style.display = "block";
        expandButton.style.display = "none";
        collapseButton.style.display = "block";
      }
    }
  
    expandButton.addEventListener("click", toggleText2);
    collapseButton.addEventListener("click", toggleText2);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const extraContent = document.querySelector(".extra-content3");
    const expandButton = document.querySelector(".expand-button3");
    const collapseButton = document.querySelector(".collapse-button3");
  
    extraContent.style.display = "none"; 
  
    function toggleText3() {
      if (extraContent.style.display === "block") {
        extraContent.style.display = "none";
        expandButton.style.display = "block";
        collapseButton.style.display = "none";
      } else {
        extraContent.style.display = "block";
        expandButton.style.display = "none";
        collapseButton.style.display = "block";
      }
    }
  
    expandButton.addEventListener("click", toggleText3);
    collapseButton.addEventListener("click", toggleText3);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const extraContent = document.querySelector(".extra-content4");
    const expandButton = document.querySelector(".expand-button4");
    const collapseButton = document.querySelector(".collapse-button4");
  
    extraContent.style.display = "none"; 
  
    function toggleText4() {
      if (extraContent.style.display === "block") {
        extraContent.style.display = "none";
        expandButton.style.display = "block";
        collapseButton.style.display = "none";
      } else {
        extraContent.style.display = "block";
        expandButton.style.display = "none";
        collapseButton.style.display = "block";
      }
    }
  
    expandButton.addEventListener("click", toggleText4);
    collapseButton.addEventListener("click", toggleText4);
  });
