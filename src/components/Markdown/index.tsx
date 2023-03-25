import React from 'react';
import ReactMarkdown from 'react-markdown';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { vscDarkPlus, coyWithoutShadows, darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './index.module.scss';

type tProps = {
  textContent: string;
  language: string;
  darkMode?: boolean;
};

const them = {
  dark: vscDarkPlus,
  light: coyWithoutShadows
};

const Markdown = (props: tProps) => {
  const { textContent, darkMode } = props;
  if (typeof darkMode === 'undefined') {
    them.light = darcula;
  }
  if (typeof darkMode === 'boolean') {
    them.light = coyWithoutShadows;
  }
  return (
    <div className={styles.container}>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                showLineNumbers={true}
                style={darkMode ? them.dark : them.light}
                language={match[1]}
                PreTag="div"
                {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}>
        {textContent}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
