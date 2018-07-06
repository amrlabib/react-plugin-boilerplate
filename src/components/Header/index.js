// @flow

import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { SvgStar } from '../../utils/svgs';
import style from './header.scss';

type PropsType = {
  title: string,
};

const Header = ({ title }: PropsType) => (
  <div styleName="container">
    <SvgStar styleName="star" />
    <span styleName="plugin-header">{title}</span>
    <SvgStar styleName="star" />
  </div>
);


const cssModuleComponet = CSSModules(Header, style);

function mapStateToProps(state: Object): Object {
  return {
    title: state.settings.title,
  };
}
export default connect(mapStateToProps)(cssModuleComponet);
