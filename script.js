const fonts = [
  // "add_font",
  // "asia_kbigr",
  // "asia_kgdu",
  "asia_kgespb",
  "df_hei_gb-w12",
  "df_hei_gb-w9",
  "dfpt_b9",
  "dfpt_bc",
  "fot-rodin_ntlg_pro-b",
  "fot-rodin_ntlg_pro-eb",
  "fot-rodin_ntlg_pro-ub",
  "gp-rodin_ntlg_pro-b",
  "gp-rodin_ntlg_pro-eb",
  "gp-rodin_ntlg_pro-ub"
];

$(document).ready(function() {
  const container = $("#fonts-container");

  fonts.forEach(font => {
    const cssSnippet = `@font-face {
  font-family: "${font}";
  src: url("https://lilylavender.github.io/SSBU-Fonts/${font}.otf") format("opentype");
}`;

    const fontSample = $(`
      <div class="font-sample-container" style="font-family: '${font}'">
        <div class="font-sample">
          <div class="font-left">
            <div class="font-name">${font}</div>
            <div class="sample-text">
              abcdefghijklmnopqrstuvwxyz<br>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
              1234567890.:,;'"(!?)+-*/=
            </div>
          </div>
          <div class="font-right">
            <button class="download-btn" data-font="${font}"><i class="fa-solid fa-download"></i> Download</button>
            <button class="copy-btn" data-css="${encodeURIComponent(cssSnippet)}"><i class="fa-solid fa-copy"></i> Copy</button>
            <pre>${cssSnippet}</pre>
          </div>
        </div>
      </div>
    `);

    container.append(fontSample);
  });

  // Download button
  $(document).on("click", ".download-btn", function() {
    const font = $(this).data("font");
    window.open(`https://lilylavender.github.io/SSBU-Fonts/${font}.otf`, "_blank");

    $(this).css({
      "background-image": "url('https://www.smashbros.com/assets_v2/img/top/globalnav__btn_bg_fighter_pc.png')",
    });
  });

  // Copy button
  $(document).on("click", ".copy-btn", function() {
    const css = decodeURIComponent($(this).data("css"));
    navigator.clipboard.writeText(css);

    $(this).css({
      "background-image": "url('https://www.smashbros.com/assets_v2/img/top/globalnav__btn_bg_fighter_pc.png')",
    });
  });
});
