import React, { FC } from 'react';
import styles from './ExampleComponent.module.css';

interface ExampleComponentProps {}

const ExampleComponent: FC<ExampleComponentProps> = () => (
  <div className={styles.ExampleComponent} data-testid="ExampleComponent">
    ExampleComponent Component
  </div>
);

export default ExampleComponent;
