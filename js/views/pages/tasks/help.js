import Component from '../../component.js';

class Help extends Component {
  render() {
    return new Promise(resolve => {
      resolve(`     
                <div class="help">Help</div>            
            `);
    });
  }

  afterRender() {
    this.setActions();
  }

  setActions() {}

}

export default Help;
