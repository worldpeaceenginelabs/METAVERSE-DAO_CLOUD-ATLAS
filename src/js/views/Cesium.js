import { html } from 'htm/preact';
import State from '../State';
import View from './View';

class Feed extends View {
  constructor() {
    super();
    this.eventListeners = {};
    this.state = {sortedMessages: [], group: "follows"};
    this.messages = {};
    this.id = 'message-view';
    this.class = 'public-messages-view';
  }

  search() {
    const searchTerm = this.props.term && this.props.term.toLowerCase();
    this.setState({searchTerm});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.term !== this.props.term) {
      this.search();
    }
  }

  componentDidMount() {
    this.search();
    if (this.props.hashtag) {
      State.local.get('filters').get('group').put('everyone');
    }
    State.local.get('filters').get('group').on(this.inject());
  }

  filter(msg) {
    if (this.state.searchTerm) {
      return msg.text && (msg.text.toLowerCase().indexOf(this.state.searchTerm) > -1);
    }
    return true;
  }

  renderView() {
    return html`
    
    <object data="https://cloudatlas.club/"
width="100%"
height="100%"
type="text/html">
</object>

    `;
  }
}

export default Feed;
