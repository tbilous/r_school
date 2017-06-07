import React, { DOM, Component } from 'react';;
import PropTypes from 'prop-types';

export default class Chart extends Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: this.refs.chart,
      data: {
        columns: this.props.columns,
        type : 'pie',
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.chart.load({ columns: nextProps.columns })
    }
  }

  render() {
    return (
      DOM.div({ref: 'chart'})
    );
  }
}

Chart.propTypes = {
  columns: PropTypes.array
};
