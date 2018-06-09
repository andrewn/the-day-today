import { h, render, Component } from 'preact';
import moment from 'moment';
/** @jsx h */

const Calendar = ({ date }) => (
		<time class="calendar">
			<span class="day">{date.format('ddd')}</span>
			<span class="date">{date.format('D')}</span>
			<span class="month">{date.format('MMM')}</span>
			<span class="year">{date.format('YYYY')}</span>
		</time>
	);

const BrowserTitle = ({ date }) => {
	document.querySelector('title').textContent = `📆 ${date.format('ddd D MMM YYYY')} - The Day`
	return null;
}

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			date: moment()
		}
	}

  render(props, state) {
		return (
			<div class="container">
				<div class="frame">
					<BrowserTitle date={state.date} />
					<Calendar date={state.date} />
				</div>
			</div>
		);
	}
}
