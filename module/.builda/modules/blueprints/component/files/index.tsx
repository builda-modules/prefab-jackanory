import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface Props extends React.ComponentProps<'div'> {
  /**
   * This is an example prop.
   */
  exampleProp?: string;
}

/**
 * Please add a description of your %PASCAL_CASE% component here.
 */
export const %PASCAL_CASE%: React.FC<Props> = ({
  exampleProp,
  className,
  ...props
}: Props) => (
  <div className={cx(styles['%KEBAB_CASE%'], className)} {...props}>
    <p>{exampleProp || 'No example prop provided'}</p>
  </div>
);

export default %PASCAL_CASE%;
