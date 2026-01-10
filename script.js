function copyText(id) {
      const textarea = document.getElementById(id);
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("Code copied!");
    }