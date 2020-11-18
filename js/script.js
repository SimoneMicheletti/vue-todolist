var app = new Vue({

  el: "#app",
  data: {
    inputElement: "",
    arrayElementToDo: []
  },

  methods: {

    addElement: function() {
      this.arrayElementToDo.push(this.inputElement)
      this.inputElement = ""
    },

    removeElement: function(indexElement) {
      this.arrayElementToDo.splice(indexElement, 1);
    }
  }

})
