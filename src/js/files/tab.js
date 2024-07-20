export default function tab() {
  const buttonsTab = document.querySelectorAll(".tab-btn");
  const tabs = document.querySelectorAll(".tab")
  
  buttonsTab.forEach(btn => {
    btn.addEventListener("click", () => {
      const {tab: tabId} = btn.dataset;
      const currentTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
      
      tabs.forEach(tab => tab.classList.remove("active"));
      currentTab.classList.add("active");

      buttonsTab.forEach(btn => btn.classList.remove("active"));
      btn.classList.add("active");
    })
  })
}