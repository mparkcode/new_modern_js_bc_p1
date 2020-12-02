const annoyer = {
  phrases: ['literally', 'cray cray', 'I can\'t even', 'Totes!', 'YOLO', "Can't stop, Won't Stop"],
  pickPhrase(){
    const {phrases} = this;
    return phrases[Math.floor(Math.random() * phrases.length)]
  },
  start(){
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 1000)
  },
  stop(){
    clearInterval(this.timerId);
    console.log(`STOP SAYING THINGS LIKE ${this.pickPhrase().toUpperCase()}`)
  }
}