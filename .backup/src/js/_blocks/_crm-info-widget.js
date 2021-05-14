import jss from "jss";

(() => {
  const widget = document.querySelector(".crm-info-widget");

  const styles = {
    toggle: `
      background: red;
    `,
  };

  const { classes } = jss.createStyleSheet(styles).attach();

  widget.innerHTML = `
    <div className="${classes.toggle}">dashboard</div>
  `;
})();
