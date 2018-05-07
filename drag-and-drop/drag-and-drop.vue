<template>
    <div id="dropZone">
            <form class="dropZone--form">
                <p class="dropZone--form--text">{{data.text.main}}</p>
                <input type="file" class="hide" id="selectInput" multiple accept="image/*" >
                <label v-show="data.show.button" class="dropZone--form--button" for="selectInput">{{data.text.button}}</label>
                <p v-show="data.show.limits" class="dropZone--form--text">{{data.text.limits}}</p>
            </form>
            <!-- Локальная загрузка довольна быстрая, полоса загрузки не требуется
             <progress id="dropZone--progress-bar" max=100 value=0></progress> -->
            <div id="dropZone--gallery"></div>
    </div>
</template>

<script>
const drag = {
  rootElem: "",
  enter: function(event) {
    event.preventDefault();
    /* Если вы этого не сделаете, то браузер в конечном итоге откроет 
        файл, который вы перетаскиваете, вместо того, 
        чтобы отправить его в обработчик события drop. */
    this.rootElem.classList.add("highlight");
    return "";
  },
  drop: function(event) {
    event.preventDefault();
    this.rootElem.classList.remove("highlight");
    const data = event.dataTransfer;
    const files = data.files; //FileList переданных файлов
    drag.handleFiles(files);
  },
  leave: function(event) {
    event.preventDefault();
    this.rootElem.classList.remove("highlight");
  },
  selectInput: event => {
    const files = event.srcElement.files;
    drag.handleFiles(files);
  },
  over: function(event) {
    event.preventDefault();
    this.rootElem.classList.add("highlight");
  },
  handleFiles: files => {
    const encodeImageFileAsURL = element => {
      const reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onloadend = function() {
        const img = document.createElement("img");
        img.src = reader.result;
        const image = document
          .getElementById("dropZone--gallery")
          .appendChild(img);
        image.className = "dropImg";
      };
    };

    [...files].forEach(element => {
      encodeImageFileAsURL(element);
    });
  },
  makeDragZone: function(elementID) {
    this.rootElem = document.getElementById(elementID);
    this.rootElem.addEventListener("dragenter", drag.enter.bind(drag), false);
    this.rootElem.addEventListener("dragleave", drag.leave.bind(drag), false);
    this.rootElem.addEventListener("dragover", drag.over.bind(drag), false);
    this.rootElem.addEventListener("drop", drag.drop.bind(drag), false);
    document
      .getElementById("selectInput")
      .addEventListener("change", drag.selectInput, false);
  }
};

const DND = {
  name: "drag-and-drop",
  data: () => {
    return {};
  },
  computed: {},
  props: ["data"],
  methods: {},
  mounted() {
    drag.makeDragZone("dropZone");
  }
};
export default DND;
</script>

<style scoped>
#dropZone {
  border: 2px dashed #ccc;
  border-radius: 0px;
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  text-align: center;
}

#dropZone.highlight {
  border-color: #fff59b;
}

dropZone--form--text {
  margin-top: 0;
}

.dropZone--form {
  margin-bottom: 10px;
}

#dropZone--gallery {
  margin-top: 10px;
}

>>>.dropImg {
  width: 150px;
  margin-bottom: 10px;
  margin-right: 10px;
  vertical-align: middle;
}

.dropZone--form--button {
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
}

.dropZone--form--button:hover {
  background: #fff59b;
}
</style>
