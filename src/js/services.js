const services = [
  {
    id: 1,
    title: "Problemas digestivos",
    descrepction:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 2,
    title: "Saúde Hormonal",
    descrepction:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 3,
    title: "Bem-estar mental",
    descrepction:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 4,
    title: "Cuidados Pediátricos",
    descrepction:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 5,
    title: "Autoimune e Inflamação",
    descrepction:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 6,
    title: "Saúde do Coração",
    descrepction:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
];

let serviceContainer = document.getElementById("service-container");

function generateServiceHTML(service) {
  return `
    <div class = "bg-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden">
        <div class="p-6 text-lg">
            <img src="./image/service-icon.png" alt="service icon">
            <h3 class="text-2x font-semibold my-4">
                ${service.title}
            </h3>
            <p class="text-gray-700 mb-4">
                ${service.descrepction}
            </p>
        </div>
    </div>
    `;
}

serviceContainer.innerHTML = services
  .map((service) => generateServiceHTML(service))
  .join("");
