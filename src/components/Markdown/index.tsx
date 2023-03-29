import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import styles from './index.module.scss';

type tProps = {
  textContent: string;
};

const Markdown = (props: tProps) => {
  const { textContent } = props;
  const [text, setText] = useState<string>(textContent);
  return (
    <div className={styles.container}>
      <MdEditor modelValue={text} onChange={setText} previewOnly={true} noPrettier={true} />
    </div>
  );
};

export default Markdown;
