import os
import streamlit as st
import streamlit.components.v1 as components

# -------------------------------------------------------------
# Streamlit Page Configuration
# -------------------------------------------------------------
st.set_page_config(
    page_title="Ashutosh Kumar | Portfolio",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# -------------------------------------------------------------
# Clean Obsidian Styles — Hide Streamlit Chrome
# -------------------------------------------------------------
hide_streamlit_ui = """
<style>
    /* Hide Streamlit header, footer, and menu */
    #MainMenu { display: none !important; }
    footer { display: none !important; }
    header { display: none !important; }
    .stApp > header { display: none !important; }
    .stDeployButton { display: none !important; }
    #manage-app-button { display: none !important; }

    /* Remove default container margins & padding */
    .stApp {
        background-color: #070709 !important;
    }
    .block-container {
        padding-top: 0rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0rem !important;
        padding-right: 0rem !important;
        max-width: 100% !important;
    }
    div[data-testid="stVerticalBlock"] {
        gap: 0rem !important;
    }
    div[data-testid="stCustomComponentV1"] {
        width: 100% !important;
    }
    iframe {
        width: 100% !important;
        border: none !important;
        background-color: #070709 !important;
    }
</style>
"""
st.markdown(hide_streamlit_ui, unsafe_allow_html=True)

# -------------------------------------------------------------
# Locate & Read the Single-File Production Build
# -------------------------------------------------------------
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
HTML_CANDIDATES = [
    os.path.join(CURRENT_DIR, "dist", "index.html"),
    os.path.join(CURRENT_DIR, "index_bundle.html"),
    os.path.join(CURRENT_DIR, "index.html"),
]

html_path = None
for candidate in HTML_CANDIDATES:
    if os.path.exists(candidate):
        html_path = candidate
        break

if not html_path:
    st.error("Error: Could not locate compiled portfolio HTML. Run `npm run build` first.")
    st.stop()

with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Auto-resizer script injection to ensure perfect responsiveness on mobile & desktop
auto_resize_script = """
<script>
  function notifyHeight() {
    try {
      const h = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      );
      window.parent.postMessage({ type: 'streamlit:setFrameHeight', height: h }, '*');
    } catch (e) {}
  }
  window.addEventListener('load', notifyHeight);
  window.addEventListener('resize', notifyHeight);
  setTimeout(notifyHeight, 300);
  setTimeout(notifyHeight, 1000);
  setTimeout(notifyHeight, 2500);
</script>
"""

# Append auto-resizer before closing body tag
if "</body>" in html_content:
    html_content = html_content.replace("</body>", f"{auto_resize_script}</body>")
else:
    html_content += auto_resize_script

# -------------------------------------------------------------
# Render Full Screen Component (height fallback: 5200px)
# -------------------------------------------------------------
components.html(html_content, height=5200, scrolling=False)
