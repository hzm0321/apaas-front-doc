"use strict";(self.webpackChunkapaas_front_doc=self.webpackChunkapaas_front_doc||[]).push([[9142],{73143:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"react-monaco-editor \u5e38\u7528\u914d\u7f6e\u9879","metadata":{"permalink":"/apaas-front-doc/blog/react-monaco-editor \u5e38\u7528\u914d\u7f6e\u9879","source":"@site/blog/2022-08-14-Monaco/index.md","title":"react-monaco-editor \u5e38\u7528\u914d\u7f6e\u9879","description":"\u57fa\u7840\u4f7f\u7528","date":"2022-08-14T00:00:00.000Z","formattedDate":"2022\u5e748\u670814\u65e5","tags":[{"label":"monaco-editor","permalink":"/apaas-front-doc/blog/tags/monaco-editor"}],"readingTime":15.585,"hasTruncateMarker":true,"authors":[{"name":"\u6c5f\u5357\u70df\u96e8","title":"\u70df\u82b1\u6613\u51b7","url":"https://github.com/hzm0321","imageURL":"https://wx.qlogo.cn/mmhead/Q3auHgzwzM7zVzxH0RqANaicqicqbupmUN6qB5KjBsLfRKf1JdT6UOAw/0","key":"hzm"}],"frontMatter":{"slug":"react-monaco-editor \u5e38\u7528\u914d\u7f6e\u9879","title":"react-monaco-editor \u5e38\u7528\u914d\u7f6e\u9879","authors":["hzm"],"tags":["monaco-editor"]},"nextItem":{"title":"Promise \u77e5\u8bc6\u70b9","permalink":"/apaas-front-doc/blog/Promise \u77e5\u8bc6\u70b9"}},"content":"### \u57fa\u7840\u4f7f\u7528\\n\\n```tsx\\nimport React, { useState, useCallback, useRef } from \\"react\\";\\nimport MonacoEditor from \\"react-monaco-editor\\";\\nimport * as monaco from \\"monaco-editor\\";\\n\\nconst Demo = () => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(); // \u7f16\u8f91\u5668\u5b9e\u4f8b\\n  const monacoRef = useRef<typeof monaco>(); // monaco \u5b9e\u4f8b\\n  \\n  // \u83b7\u53d6\u7f16\u8f91\u5668\u5b9e\u4f8b\\n  const editorDidMountHandle = useCallback(\\n    (editor: monaco.editor.IStandaloneCodeEditor, monacoIns: typeof monaco) => {\\n      editorRef.current = editor;\\n      monacoRef.current = monacoIns;\\n    },[]);\\n\\n  return (\\n    <MonacoEditor\\n      language=\\"javascript\\"\\n      height=\\"100%\\"\\n      theme=\\"vs\\"\\n      value={value}\\n      onChange={setValue}\\n      options={{\\n        roundedSelection: false,\\n        cursorStyle: \\"line\\",\\n        wordWrap: \\"on\\",\\n      }}\\n      editorDidMount={editorDidMountHandle}\\n    />\\n  );\\n};\\n\\n```\\n`editorInstance` \u548c `monacoInstance` \u7684\u533a\u522b\uff1a\\n - `editorInstance`\uff1a\u4e3b\u8981\u4f5c\u7528\u4e8e\u7f16\u8f91\u5668\u4e0a\u64cd\u4f5c\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\u7f16\u8f91\u5668\u5199\u5165\u64cd\u4f5c\u7b49\u3002\\n - `monacoInstance`\uff1a\u4e3b\u8981\u662f\u7f16\u8f91\u5668\u8bed\u8a00\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u4f8b\u5982\u53d8\u91cf\u63d0\u793a\u3001\u9f20\u6807\u60ac\u6d6e\u63d0\u793a\u7b49\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n### \u914d\u7f6e\u9879\\n- `value`: \u7f16\u8f91\u5668\u521d\u59cb\u663e\u793a\u6587\u5b57\\n- `language`\uff1a\u8bed\u8a00\u652f\u6301\\n- dimension\uff1a\u521d\u59cb\u7f16\u8f91\u5668\u5c3a\u5bf8\\n- inDiffEditor\uff1a\u662f\u5426\u4f5c\u4e3a diff \u7f16\u8f91\u5668\u4e2d\u4f7f\u7528\\n- ariaLabel\uff1aaria-label \u9605\u8bfb\u8f85\u52a9\u6807\u7b7e\\n- rulers\uff1a\u5728\u6307\u5b9a\u7684\u5217\u4e0a\u5448\u73b0\u7ad6\u7ebf\u3002\u9ed8\u8ba4\u4e3a\u7a7a\u6570\u7ec4\\n- wordSeparators\uff1a\u5305\u542b\u5355\u8bcd\u5bfc\u822a\u65f6\u4f7f\u7528\u7684\u5355\u8bcd\u5206\u9694\u7b26\u7684\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u4e3a `~!@#$%^&*()-=+[{]}\\\\|;:\'\u201c,\\n- selectionClipboard\uff1a\u542f\u7528Linux\u4e3b\u526a\u8d34\u677f\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- `lineNumbers`\uff1a\u63a7\u5236\u884c\u53f7\u7684\u5448\u73b0\u3002\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5c06\u5728\u5448\u73b0\u884c\u53f7\u65f6\u88ab\u8c03\u7528\uff0c\u5e76\u5c06\u5448\u73b0\u8fd4\u56de\u503c\u3002\u5426\u5219\uff0c\u5982\u679c\u4e3a\u771f\u503c\uff0c\u884c\u53f7\u5c06\u6b63\u5e38\u5448\u73b0(\u76f8\u5f53\u4e8e\u4f7f\u7528\u4e00\u4e2a\u6052\u7b49\u51fd\u6570)\u3002\u5426\u5219\uff0c\u5c06\u4e0d\u4f1a\u5448\u73b0\u884c\u53f7\u3002\u9ed8\u8ba4\u4e3a\'on\'\u3002\\n- renderFinalNewline\uff1a\u5f53\u6587\u4ef6\u4ee5\u6362\u884c\u7b26\u7ed3\u675f\u65f6\uff0c\u5448\u73b0\u6700\u540e\u4e00\u884c\u53f7\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- selectOnLineNumbers\uff1a\u5355\u51fb\u884c\u53f7\u65f6\u662f\u5426\u5e94\u9009\u62e9\u76f8\u5e94\u7684\u884c\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- lineNumbersMinChars\uff1a\u63a7\u5236\u884c\u53f7\u7684\u5b57\u7b26\u5bbd\u5ea6\u6570\u91cf, \u9ed8\u8ba4\u503c\u4e3a 5\\n- glyphMargin: \u662f\u5426\u542f\u7528\u5b57\u5f62\u8fb9\u8ddd\uff0c\u9ed8\u8ba4 false\\n- lineDecorationsWidth\uff1a\u7f16\u8f91\u5668\u8f93\u5165\u6846\u4e0e\u884c\u53f7\u4e4b\u95f4\u5bbd\u5ea6\uff0c\u9ed8\u8ba4 10\\n- revealHorizontalRightPadding\uff1a\u5f53\u663e\u793a\u6e38\u6807\u65f6\uff0c\u4f1a\u5411\u6e38\u6807\u6dfb\u52a0\u4e00\u4e2a\u865a\u62df\u586b\u5145(px)\uff0c\u5c06\u5176\u53d8\u6210\u4e00\u4e2a\u77e9\u5f62\u3002\u8fd9\u4e2a\u865a\u62df\u586b\u5145\u786e\u4fdd\u5149\u6807\u5728\u5230\u8fbe\u89c6\u53e3\u8fb9\u7f18\u4e4b\u524d\u88ab\u663e\u793a\u51fa\u6765\u3002\u9ed8\u8ba4\u503c\u4e3a30 (px)\\n- roundedSelection\uff1a\u5448\u73b0\u5e26\u6709\u5706\u89d2\u8fb9\u6846\u7684\u7f16\u8f91\u5668\u9009\u62e9\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- extraEditorClassName\uff1a\u6dfb\u52a0\u989d\u5916\u7684\u6837\u5f0f\\n- `readOnly`\uff1a\u662f\u5426\u53ea\u8bfb\\n- renderValidationDecorations\uff1a\u7f16\u8f91\u5668\u662f\u5426\u5e94\u8be5\u5448\u73b0\u9a8c\u8bc1\u88c5\u9970\u3002\u9ed8\u8ba4\u4e3a \u2018editable\u2019\u3002\\n- scrollbar\uff1a\u63a7\u5236\u6eda\u52a8\u6761\u7684\u53c2\u6570\\n- minimap\uff1a\u63a7\u5236\u7f29\u7565\u56fe\\n- find\uff1a\u63a7\u5236\u67e5\u627e\u7ec4\u4ef6\u884c\u4e3a\\n- fixedOverflowWidgets\uff1a\u5c06\u6ea2\u51fa\u5c0f\u90e8\u4ef6\u663e\u793a\u4e3a\u56fa\u5b9a\u72b6\u6001\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- overviewRulerLanes\uff1a\u603b\u89c8\u6807\u5c3a\u5e94\u8be5\u663e\u793a\u7684\u5782\u76f4\u5217\u6570\u3002\u9ed8\u8ba4\u4e3a3\u3002\\n- overviewRulerBorder\uff1a\u63a7\u5236\u662f\u5426\u5e94\u8be5\u5728\u6982\u89c8\u6807\u5c3a\u5468\u56f4\u7ed8\u5236\u8fb9\u6846\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- cursorBlinking\uff1a\u63a7\u5236\u5149\u6807\u7684\u52a8\u753b\u6837\u5f0f\uff0c\u53ef\u80fd\u7684\u503c\u4e3a\'blink\'\uff0c \'smooth\'\uff0c \'phase\'\uff0c \'expand\'\u548c\'solid\'\u3002\u9ed8\u8ba4\u4e3a\u201cblink\u201d\u3002\\n- mouseWheelZoom\uff1a\u5f53\u4f7f\u7528\u9f20\u6807\u6eda\u8f6e\u5e76\u6309\u4f4fCtrl\u952e\u65f6\uff0c\u53ef\u4ee5\u653e\u5927\u7f16\u8f91\u5668\u4e2d\u7684\u5b57\u4f53\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- mouseStyle\uff1a\u63a7\u5236\u9f20\u6807\u6307\u9488\u6837\u5f0f\uff0c\'text\'\u6216\'default\'\u6216\'copy\'\u9ed8\u8ba4\u4e3a\'text\'\\n- cursorSmoothCaretAnimation\uff1a\u542f\u7528\u5e73\u6ed1\u63d2\u5165\u7b26\u53f7\u52a8\u753b\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- cursorStyle\uff1a\u5149\u6807\u6837\u5f0f\uff0c\u53ef\u9009 \'line\' | \'block\' | \'underline\' | \'line-thin\' | \'block-outline\' | \'underline-thin\' \u9ed8\u8ba4 \'line\'\\n- cursorWidth\uff1a\u5149\u6807\u5bbd\u5ea6\\n- fontLigatures\uff1a\u662f\u5426\u542f\u7528 font ligatures\uff0c\u9ed8\u8ba4 false\\n- disableLayerHinting\uff1a\u7981\u6b62\u5bf9\u7f16\u8f91\u5668\u8fb9\u8ddd\u548c\u884c\u56fe\u5c42\u4f7f\u7528\u201ctransform:translate3d\uff080px\uff0c0px\uff0c0px\uff09\u201d\u3002\u201ctransform:translate3d\uff080px\uff0c0px\uff0c0px\uff09\u201d\u7684\u7528\u6cd5\u53ef\u4ee5\u4f5c\u4e3a\u6d4f\u89c8\u5668\u521b\u5efa\u989d\u5916\u5c42\u7684\u63d0\u793a\u3002\u9ed8\u8ba4\u503c false\\n- disableMonospaceOptimizations\uff1a\u7981\u7528monospace\u5b57\u4f53\u7684\u4f18\u5316\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- hideCursorInOverviewRuler\uff1a\u5149\u6807\u662f\u5426\u9690\u85cf\u5728\u6982\u89c8\u6807\u5c3a\u4e2d\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- scrollBeyondLastLine\uff1a\u4f7f\u6eda\u52a8\u53ef\u4ee5\u5728\u6700\u540e\u4e00\u884c\u4e4b\u540e\u79fb\u52a8\u4e00\u4e2a\u5c4f\u5e55\u5927\u5c0f\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- scrollBeyondLastColumn\uff1a\u542f\u7528\u6eda\u52a8\u53ef\u4ee5\u8d85\u8d8a\u6700\u540e\u4e00\u5217\u7684\u591a\u4e2a\u5217\u3002\u9ed8\u8ba4\u4e3a5\u3002\\n- smoothScrolling\uff1a\u542f\u7528\u7f16\u8f91\u5668\u6eda\u52a8\u5230\u4e00\u4e2a\u4f4d\u7f6e\u7684\u52a8\u753b\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- `automaticLayout`\uff1a\u7f16\u8f91\u5668\u5c06\u8bbe\u7f6e\u4e00\u4e2a\u95f4\u9694\u65f6\u95f4\u6765\u68c0\u67e5\u5176dom\u8282\u70b9\u5927\u5c0f\u662f\u5426\u5df2\u66f4\u6539\u3002\u542f\u7528\u6b64\u529f\u80fd\u53ef\u80fd\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u4e25\u91cd\u5f71\u54cd\u3002\u9ed8\u8ba4\u503c false\\n- `wordWrap`\uff1a\u8bbe\u7f6e\u7f16\u8f91\u5668\u7684\u6362\u884c.\u9ed8\u8ba4 \\"off\\".\\n- wordWrapColumn\uff1awordWrap\u8bbe\u7f6e\u4e3awordWrapColumn\u751f\u6548\uff0c\u9ed8\u8ba4\u503c 80.\\n- wordWrapMinified\uff1a\u5f53\u6587\u672c\u770b\u8d77\u6765\u662f\u4e00\u4e2a\u7f29\u5c0f/\u751f\u6210\u7684\u6587\u4ef6\u65f6\u5f3a\u5236\u6362\u884c\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- wrappingIndent\uff1a\u63a7\u5236\u6362\u884c\u884c\u7684\u7f29\u8fdb\u3002\u53ef\u4ee5\u662f:\'none\'\uff0c \'same\'\uff0c \'indent\'\u6216\'deepIndent\'\u3002\u5728vscode\u4e2d\u9ed8\u8ba4\u4e3a\'same\'\uff0c\u5728\u6469\u7eb3\u54e5\u7f16\u8f91\u5668\u4e2d\u9ed8\u8ba4\u4e3a\'none\'\\n- wrappingStrategy\uff1a\u6362\u884c\u7b56\u7565. \u9ed8\u8ba4 \'simple\'.\\n- wordWrapBreakBeforeCharacters\uff1a\u914d\u7f6e\u6362\u884c\u5b57\u7b26\u3002\u5728\u8fd9\u4e9b\u5b57\u7b26\u4e4b\u524d\u5c06\u5f15\u5165\u4e00\u4e2a\u4e2d\u65ad Defaults to \'([{\u2018\u201c\u3008\u300a\u300c\u300e\u3010\u3014\uff08\uff3b\uff5b\uff62\xa3\xa5\uff04\uffe1\uffe5+\uff0b\'\\n- wordWrapBreakAfterCharacters\uff1a\u914d\u7f6e\u6362\u884c\u5b57\u7b26\u3002\u5728\u8fd9\u4e9b\u5b57\u7b26\u4e4b\u540e\u5c06\u5f15\u5165\u4e2d\u65ad\\n- stopRenderingLineAfter\uff1a\u505c\u6b62\u6e32\u67d3x\u4e2a\u5b57\u7b26\u540e\u7684\u884c Defaults to 10000. \u4f7f\u7528-1\u6c38\u4e0d\u505c\u6b62\u6e32\u67d3\\n- hover\uff1a\u914d\u7f6e hover\\n- links\uff1a\u542f\u7528\u68c0\u6d4b\u94fe\u63a5\u5e76\u4f7f\u5176\u53ef\u5355\u51fb. \u9ed8\u8ba4 true.\\n- colorDecorators\uff1a\u542f\u7528\u5185\u8054\u989c\u8272\u88c5\u9970\u5668\u548c\u989c\u8272\u9009\u62e9\u5668\u6e32\u67d3\\n- comments\uff1a\u63a7\u5236\u7f16\u8f91\u5668\u4e2d\u7684\u6ce8\u91ca\u884c\u4e3a\\n- contextmenu\uff1a\u542f\u7528\u81ea\u5b9a\u4e49\u5feb\u6377\u83dc\u5355\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- mouseWheelScrollSensitivity\uff1a\u4e00\u4e2a\u4e58\u6570\uff0c\u7528\u4e8e\u9f20\u6807\u6eda\u8f6e\u6eda\u52a8\u4e8b\u4ef6\u7684deltaX\u548cdeltaY\u3002\u9ed8\u8ba4\u4e3a1\u3002\\n- fastScrollSensitivity\uff1a\u5f53\u6309\u4e0bAlt\u952e\u65f6\uff0cFastScrolling\u500d\u7387\u9ed8\u8ba4\u4e3a5\u3002\\n- multiCursorModifier\uff1a\u7528\u4e8e\u7528\u9f20\u6807\u6dfb\u52a0\u591a\u4e2a\u6e38\u6807\u7684\u4fee\u9970\u7b26\u3002\u9ed8\u8ba4\u4e3a\u201calt\u201d\\n- multiCursorMergeOverlapping\uff1a\u5408\u5e76\u91cd\u590d\u9009\u62e9\u3002\u9ed8\u8ba4\u503c\u4e3atrue\\n- multiCursorPaste\uff1a\u914d\u7f6e\u7c98\u8d34\u884c\u6570\u7b49\u4e8e\u6e38\u6807\u6570\u7684\u6587\u672c\u65f6\u7684\u884c\u4e3a\u3002\u9ed8\u8ba4\u4e3a\u201cspread\u201d\u3002\\n- suggest\uff1a\u63d0\u793a\u5efa\u8bae\\n- quickSuggestions\uff1a\u662f\u5426\u542f\u7528\u5feb\u901f\u5efa\u8bae\uff0c\u9ed8\u8ba4 true\\n- quickSuggestionsDelay\uff1a\u5feb\u901f\u5efa\u8bae\u5ef6\u8fdf\uff0c\u9ed8\u8ba4 10 \u6beb\u79d2\\n- parameterHints\uff1a\u53c2\u6570\u63d0\u793a\u9009\u9879\u3002\\n- autoClosingBrackets\uff1a\u81ea\u52a8\u5173\u95ed\u62ec\u53f7\u7684\u9009\u9879\u3002\u9ed8\u8ba4\u4e3a\u8bed\u8a00\u5b9a\u4e49\u7684\u884c\u4e3a\u3002\\n- formatOnType\uff1a\u5728\u7c7b\u578b\u4e0a\u542f\u7528\u683c\u5f0f\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- formatOnPaste\uff1a\u542f\u7528\u7c98\u8d34\u683c\u5f0f\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- dragAndDrop\uff1a\u63a7\u5236\u7f16\u8f91\u5668\u662f\u5426\u5141\u8bb8\u901a\u8fc7\u62d6\u653e\u79fb\u52a8\u9009\u62e9\u9879\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- suggestOnTriggerCharacters\uff1a\u542f\u7528\u5efa\u8bae\u6846\u5728\u89e6\u53d1\u5b57\u7b26\u65f6\u5f39\u51fa\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- acceptSuggestionOnEnter\uff1a\u6309\u4e0b\u56de\u8f66\u63a5\u53d7\u5efa\u8bae\uff0c \u9ed8\u8ba4 \'on\'\\n- acceptSuggestionOnCommitCharacter\uff1a\u63a5\u53d7\u8bed\u8a00\u63d0\u4f9b\u7684\u5b9a\u4e49\u5b57\u7b26\u7684\u5efa\u8bae\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- snippetSuggestions\uff1a\u4f7f\u4ee3\u7801\u7247\u6bb5\u7684\u5efa\u8bae\u3002\u9ed8\u8ba4\u4e3atrue\u3002\\n- emptySelectionClipboard\uff1a\u4e0d\u5e26\u9009\u5b9a\u9879\u7684\u590d\u5236\u590d\u5236\u5f53\u524d\u884c\u3002\\n- copyWithSyntaxHighlighting\uff1a\u590d\u5236\u8bed\u6cd5\u9ad8\u4eae\u663e\u793a\u3002\\n- suggestSelection\uff1a\u5386\u53f2\u6a21\u5f0f\u5efa\u8bae\u3002\\n- suggestFontSize\uff1a\u5efa\u8bae\u5b57\u4f53\u5927\u5c0f\\n- suggestLineHeight\uff1a\u5efa\u8bae\u6587\u5b57\u884c\u9ad8\\n- tabCompletion\uff1a\u542f\u7528\u9009\u9879\u5361\\n- selectionHighlight\uff1a\u4f7f\u9009\u62e9\u7a81\u51fa\u663e\u793a\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- occurrencesHighlight\uff1a\u542f\u7528\u8bed\u4e49\u7a81\u51fa\u663e\u793a\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- codeLens\uff1a\u663e\u793acode len\u9ed8\u8ba4\u4e3a true\u3002\\n- lightbulb\uff1a\u63a7\u5236\u4ee3\u7801\u52a8\u4f5c\u706f\u6ce1\u7684\u884c\u4e3a\u548c\u5448\u73b0\u3002\\n- codeActionsOnSaveTimeout\uff1a\u4fdd\u5b58\u65f6\u8fd0\u884c\u4ee3\u7801\u64cd\u4f5c\u7684 time\u3002\\n- folding\uff1a\u652f\u6301\u4ee3\u7801\u6298\u53e0\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- foldingStrategy\uff1a\u9009\u62e9\u6298\u53e0\u7b56\u7565\u3002\'auto\'\u4f7f\u7528\u4e3a\u5f53\u524d\u6587\u6863\u63d0\u4f9b\u7684\u7b56\u7565\uff0c\'indentation\'\u4f7f\u7528\u57fa\u4e8e\u7f29\u8fdb\u7684\u6298\u53e0\u7b56\u7565\u3002\u9ed8\u8ba4\u4e3a\u201cauto\u201d\u3002\\n- foldingHighlight\uff1a\u5bf9\u6298\u53e0\u533a\u57df\u542f\u7528\u9ad8\u4eae\u663e\u793a\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- showFoldingControls\uff1a\u63a7\u5236\u8fb9\u680f\u4e2d\u7684\u6298\u53e0\u64cd\u4f5c\u662f\u59cb\u7ec8\u53ef\u89c1\u8fd8\u662f\u9690\u85cf\uff0c\u9664\u975e\u9f20\u6807\u5728\u8fb9\u680f\u4e0a\u65b9\u3002\u9ed8\u8ba4\u4e3a\u201cmouseover\u201d\u3002\\n- matchBrackets\uff1a\u542f\u7528\u5339\u914d\u65b9\u62ec\u53f7\u7684\u9ad8\u4eae\u663e\u793a\u3002\u9ed8\u8ba4\u4e3a\u201calways\u201d\u3002\\n- renderWhitespace\uff1a\u542f\u7528\u7a7a\u767d\u7684\u5448\u73b0\u3002\u9ed8\u8ba4\u4e3a none\u3002\\n- renderControlCharacters\uff1a\u542f\u7528\u63a7\u5236\u5b57\u7b26\u7684\u5448\u73b0\u3002\u9ed8\u8ba4\u503c\u4e3afalse\u3002\\n- renderIndentGuides\uff1a\u542f\u7528\u7f29\u8fdb\u7ebf\u7684\u5448\u73b0\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- highlightActiveIndentGuide\uff1a\u542f\u7528\u7a81\u51fa\u663e\u793a\u6d3b\u52a8\u7f29\u8fdb\u6307\u5357\u3002\u9ed8\u8ba4\u503c\u4e3atrue\u3002\\n- renderLineHighlight\uff1a\u542f\u7528\u5f53\u524d\u884c\u9ad8\u4eae\u663e\u793a\u3002\u9ed8\u8ba4\u4e3a all\u3002\\n- useTabStops\uff1a\u662f\u5426\u5728\u5236\u8868\u4f4d\u4e4b\u540e\u63d2\u5165\u548c\u5220\u9664\u7a7a\u683c\u3002\\n- fontFamily\uff1a\u5b57\u4f53\\n- fontWeight\uff1a\u5b57\u4f53\u5bbd\u5ea6\\n- fontSize\uff1a\u5b57\u4f53\u5927\u5c0f\\n- lineHeight\uff1a \u884c\u9ad8\\n- letterSpacing\uff1a\u5b57\u95f4\u8ddd\\n\\n### \u63d2\u5165\u5185\u5bb9\\n\u65b9\u5f0f\u4e00\uff1a\u6a21\u62df\u952e\u76d8\u8f93\u5165\u4ece\u5149\u6807\u540e\u63d2\u5165  \\n```tsx\\nconst str = \'\u5f85\u63d2\u5165\u7684\u5185\u5bb9\'\\neditorInstance?.trigger(\'keyboard\', \'type\', { text: str });\\n```\\n\u65b9\u5f0f\u4e8c\uff1a\u76f4\u63a5\u4ece\u5149\u6807\u5904\u63d2\u5165\u5185\u5bb9\\n```tsx\\n// \u5feb\u901f\u63d2\u5165\\nconst code = \'\u5f85\u63d2\u5165\u7684\u5185\u5bb9\'\\nconst position = editorInstance?.getPosition();\\nconst selection = editorInstance?.getSelection();\\neditorInstance?.executeEdits(\'\', [\\n  {\\n    range: {\\n      startLineNumber: position?.lineNumber || 0,\\n      startColumn: position?.column || 0,\\n      endLineNumber: selection?.endLineNumber || position?.lineNumber || 0,\\n      endColumn: selection?.endColumn || position?.column || 0,\\n    } as any,\\n    text: code,\\n  },\\n]);\\n```\\n### \u4ee3\u7801\u683c\u5f0f\u5316\\n```tsx\\n// \u683c\u5f0f\u5316\\nawait editorInstance?.getAction(\'editor.action.formatDocument\').run();\\n```\\n\\n### \u53d8\u91cf\u63d0\u793a\\n```tsx\\nimport React, { useState, useCallback, useRef, useEffect } from \\"react\\";\\nimport MonacoEditor from \\"react-monaco-editor\\";\\nimport * as monaco from \\"monaco-editor\\";\\n\\nconst Demo = () => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(); // \u7f16\u8f91\u5668\u5b9e\u4f8b\\n  const monacoRef = useRef<typeof monaco>(); // monaco \u5b9e\u4f8b\\n  const monacoHoverProviderRef = useRef<monaco.IDisposable>(); // monaco \u6ce8\u518c\u7f13\u5b58\\n  const monacoCompletionItemProviderRef = useRef<monaco.IDisposable>(); // monaco \u6ce8\u518c\u7f13\u5b58\\n\\n  useEffect(() => {\\n    // \u4e3a\u7f16\u8f91\u5668\u6ce8\u5165\u53d8\u91cf\u63d0\u793a\\n    monacoCompletionItemProviderRef.current =\\n      monacoRef.current?.languages.registerCompletionItemProvider(\\n        \\"javascript\\",\\n        {\\n          provideCompletionItems: (model, position) => {\\n            // \u81ea\u5b9a\u4e49\u53d8\u91cf\u63d0\u793a\u89c4\u5219\\n            return {\\n              suggestions,\\n            };\\n          },\\n          triggerCharacters: [\\".\\"],\\n        }\\n      );\\n    // \u9f20\u6807\u60ac\u6d6e\u63d0\u793a\\n    monacoHoverProviderRef.current = monaco.languages.registerHoverProvider(\\n      \\"javascript\\",\\n      {\\n        provideHover: (model, position) => {\\n          // \u81ea\u5b9a\u4e49\u53d8\u91cf\u63d0\u793a\u89c4\u5219\\n          return {\\n            contents,\\n          };\\n        },\\n      }\\n    );\\n\\n    return () => {\\n      // \u9000\u51fa\u65f6,\u9500\u6bc1\u6ce8\u518c\u7684\u5185\u5bb9\u907f\u514d\u91cd\u590d\u521b\u5efa\\n      monacoCompletionItemProviderRef.current?.dispose();\\n      monacoHoverProviderRef.current?.dispose();\\n    };\\n  }, []);\\n\\n  // \u83b7\u53d6\u7f16\u8f91\u5668\u5b9e\u4f8b\\n  const editorDidMountHandle = useCallback(\\n    (editor: monaco.editor.IStandaloneCodeEditor, monacoIns: typeof monaco) => {\\n      editorRef.current = editor;\\n      monacoRef.current = monacoIns;\\n    },\\n    []\\n  );\\n\\n  return (\\n    <MonacoEditor\\n      language=\\"javascript\\"\\n      height=\\"100%\\"\\n      theme=\\"vs\\"\\n      value={value}\\n      onChange={setValue}\\n      options={{\\n        roundedSelection: false,\\n        cursorStyle: \\"line\\",\\n        automaticLayout: true,\\n        selectOnLineNumbers: true,\\n        wordWrap: \\"on\\",\\n      }}\\n      editorDidMount={editorDidMountHandle}\\n    />\\n  );\\n};\\n```\\n\u4e3a\u4e86\u907f\u514d\u53d8\u91cf\u88ab\u91cd\u590d\u6ce8\u518c\uff0c\u56e0\u6b64\u9700\u8981 `ref` \u5b58\u4e00\u4e0b\u53d8\u91cf\u63d0\u793a\u5b9e\u4f8b\uff0c\u5728\u9500\u6bc1\u9636\u6bb5\u6ce8\u9500\u53d8\u91cf\u6ce8\u518c\u3002  \\n\\n\u4e3a\u4e86\u4fbf\u4e8e\u52a8\u6001\u53d8\u91cf\u89c4\u5219\u7684\u4f7f\u7528\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7684\u7c7b\uff0c\u7528\u4e8e\u8ba1\u7b97\u53d8\u91cf\u5c42\u7ea7\u63d0\u793a\u3002\\n\\n```tsx\\nimport { isArray } from \'lodash\';\\nimport * as monaco from \'monaco-editor\';\\n\\nimport {\\n  FormatFunctionProps,\\n  InsertFunctionProps,\\n} from \'@/routes/ScriptEvent/EditPage/types/function\';\\n\\ninterface MonacoVariableTipsProps {\\n  variableData: FormatFunctionProps[];\\n  level: number;\\n}\\n\\ninterface TipProps {\\n  word: string;\\n  remark?: string;\\n}\\n\\nexport class MonacoVariableTips {\\n  // \u5f53\u524d\u884c\u8f93\u5165\u7684\u8fde\u7eed\u5185\u5bb9\\n  content: string | undefined;\\n\\n  // \u5f53\u524d\u884c\u8f93\u5165\u7684\u5185\u5bb9\\n  lineContent: string | undefined;\\n\\n  // \u521a\u8f93\u5165\u7684\u5185\u5bb9\\n  input: string | undefined;\\n\\n  // \u5f53\u524d\u884c\u8f93\u5165\u7684\u5355\u8bcd\\n  word: string | undefined;\\n\\n  private model: monaco.editor.ITextModel | undefined;\\n\\n  private position: monaco.Position | undefined;\\n\\n  // \u8981\u63d0\u793a\u7684\u5c42\u7ea7\uff0c \u9ed8\u8ba4\u63d0\u793a\u4e0b\u4e00\u5c42\\n  private readonly level: number;\\n\\n  // \u5b8c\u6574\u7684\u53d8\u91cf\u6570\u636e\\n  private readonly variableData: FormatFunctionProps[];\\n\\n  /**\\n   * \u4e3a monaco \u7f16\u8f91\u5668\u6dfb\u52a0\u53d8\u91cf\u63d0\u793a\\n   * @param props\\n   */\\n  constructor(props: MonacoVariableTipsProps) {\\n    this.level = props.level || 1;\\n    this.variableData = props.variableData;\\n  }\\n\\n  /**\\n   * \u662f\u5426\u7531 . \u89e6\u53d1\\n   */\\n  get isDotTrigger() {\\n    return this.input === \'.\';\\n  }\\n\\n  /**\\n   * \u89e3\u6790\u5f53\u524d\u884c\\n   */\\n  parseContinuousContent(model: monaco.editor.ITextModel, position: monaco.Position) {\\n    if (!position || !model) {\\n      throw new Error(\'position | model is undefined\');\\n    }\\n    this.model = model;\\n    this.position = position;\\n    const { column, lineNumber } = this.position;\\n    this.lineContent = this.model.getLineContent(lineNumber);\\n    this.content =\\n      this.lineContent\\n        .slice(0, column - 1)\\n        .split(\' \')\\n        .pop() || \'\';\\n    this.input = this.lineContent[column - 2];\\n    this.word = this.model.getWordAtPosition(position)?.word;\\n  }\\n\\n  /**\\n   * \u89e3\u6790\u5185\u5bb9\u4e3a\u53d8\u91cf\u5c42\u7ea7\\n   * @param str\\n   * @param isFlat \u662f\u5426\u6253\u5e73\u4e3a\u4e00\u7ef4\u5b57\u7b26\u4e32\u6570\u7ec4\\n   */\\n  static analysisWords(str: string = \'\', isFlat?: boolean) {\\n    // \u628a ... \u66ff\u6362\u6210 ***\\n    const _str = str.replace(/\\\\.\\\\.\\\\./g, \'***\');\\n    const res = _str\\n      .split(\'.\')\\n      .filter(Boolean)\\n      .map((v) => {\\n        return {\\n          word: v.replace(/\\\\*\\\\*\\\\*/g, \'...\'),\\n          match: v.match(/^\\\\w*/g)?.join(\'\')!,\\n        };\\n      });\\n    if (isFlat) {\\n      return res.map((v) => v.match);\\n    }\\n    return res;\\n  }\\n\\n  /**\\n   * \u6839\u636e\u8f93\u5165\u5728\u53d8\u91cf\u5339\u914d tree \u4e2d\u641c\u7d22\u547d\u4e2d\u7684\u5c42\u7ea7\\n   * @param inputWords\\n   */\\n  searchFunctionsVariable(inputWords: string[]) {\\n    let res: FormatFunctionProps[] = [];\\n    let target: FormatFunctionProps | undefined;\\n    inputWords.forEach((word, index) => {\\n      if (!target) {\\n        target = this.variableData.find((v) => v.match.startsWith(word));\\n        if (target && inputWords.length === index + 1) {\\n          // \u6700\u540e\u4e00\u5c42\\n          res = [target];\\n        }\\n      } else if (inputWords.length === index + 1) {\\n        // \u8868\u793a\u5df2\u7ecf\u5230\u76ee\u6807\u6700\u540e\u4e00\u5c42\uff0c\u8fdb\u884c\u6a21\u7cca\u641c\u7d22\\n        const r = target.children.filter((v) => v.match.startsWith(word));\\n        res = r;\\n      } else {\\n        target = target.children.find((v) => v.match.startsWith(word));\\n      }\\n    });\\n\\n    return res;\\n  }\\n\\n  /**\\n   * \u6df1\u641c\u7ed3\u679c\uff0c\u62c9\u5e73\u6210\u4e00\u7ef4\u6570\u7ec4\\n   * @param searchResult\\n   * @param isDotTrigger\\n   * @param inputLength\\n   */\\n  dfsSearchResult(searchResult: FormatFunctionProps[], isDotTrigger: boolean, inputLength: number) {\\n    const tips: TipProps[] = [];\\n    const { level } = this;\\n\\n    const clearStartDot = (word: string = \'\') => {\\n      if (word.startsWith(\'.\')) {\\n        return word.substring(1);\\n      }\\n      return word;\\n    };\\n    dfs(searchResult, { word: \'\' }, 0, {});\\n\\n    function dfs(curSearchResult, curTip, curLevel, parentSearchResult) {\\n      // \u8fb9\u754c\\n      if (!curSearchResult || curSearchResult.length === 0 || curLevel > level) {\\n        if (isDotTrigger) {\\n          if (curLevel === level) {\\n            // eslint-disable-next-line no-param-reassign\\n            curTip.word = curTip.word.substring(parentSearchResult.parentWord.length + 1);\\n          } else if (curLevel > level) {\\n            // eslint-disable-next-line no-param-reassign\\n            curTip.word = curTip.word.substring(inputLength + 1);\\n          }\\n        }\\n        // eslint-disable-next-line no-param-reassign\\n        curTip.word = clearStartDot(curTip.word);\\n        if (curTip.word) {\\n          tips.push(curTip);\\n        }\\n        return;\\n      }\\n\\n      // \u6dfb\u52a0\u7236\u7ea7\u6570\u636e\\n      if (curLevel > 0) {\\n        const _tip = { ...curTip };\\n        if (!isDotTrigger) {\\n          _tip.word = clearStartDot(_tip.word);\\n          if (_tip.word) {\\n            tips.push(_tip);\\n          }\\n        }\\n      }\\n\\n      // \u5982\u679c\u8fd8\u6ca1\u5230\u5c42\u7ea7\u7ee7\u7eed\u5f80\u4e0b\u8d70\\n      curSearchResult.forEach((item) => {\\n        dfs(\\n          item.children,\\n          {\\n            ...curTip,\\n            word: `${curTip.word}.${item.word}`,\\n            remark: item.remark || curTip.remark,\\n          },\\n          curLevel + 1,\\n          item\\n        );\\n      });\\n    }\\n\\n    return tips;\\n  }\\n\\n  /**\\n   * \u751f\u6210\u63d0\u793a\\n   * @param tips\\n   */\\n  generateSuggestions(tips: TipProps[]) {\\n    return tips.map((item) => ({\\n      label: item.word,\\n      kind: monaco.languages.CompletionItemKind.Function,\\n      insertText: item.word,\\n      documentation: item.remark,\\n      detail: item.remark,\\n      // range: {\\n      //   startLineNumber: 1,\\n      // },\\n    }));\\n  }\\n\\n  /**\\n   * \u751f\u6210\u60ac\u6d6e\u63d0\u793a\u6570\u636e\u683c\u5f0f\\n   * @param hoverTips\\n   */\\n  generateHover(hoverTips: FormatFunctionProps[]) {\\n    return hoverTips.map((item) => ({\\n      value: item.remark || \'\',\\n      isTrusted: true,\\n      supportThemeIcons: true,\\n    }));\\n  }\\n\\n  getSuggestions() {\\n    const words = MonacoVariableTips.analysisWords(this.content, true) as string[];\\n    const searchResult = this.searchFunctionsVariable(words);\\n    const inputLength = words.join(\'\').length;\\n    const tips = this.dfsSearchResult(searchResult, this.isDotTrigger, inputLength);\\n    const suggestions = this.generateSuggestions(tips);\\n    return suggestions;\\n  }\\n\\n  getHover() {\\n    const words = MonacoVariableTips.analysisWords(this.content, true) as string[];\\n    if (isArray(words) && words.length > 0) {\\n      words[words.length - 1] = this.word!;\\n    }\\n    const hoverTips = this.searchFunctionsVariable(words);\\n    const hovers = this.generateHover(hoverTips);\\n    return hovers;\\n  }\\n}\\n```\\n\u4ec5\u9700\u6309\u7167 `FormatFunctionProps[]` \u7c7b\u578b\u4f20\u5165\u53d8\u91cf\u89c4\u5219\u5373\u53ef\uff0c\u5177\u4f53\u89c1\u9879\u76ee\u6587\u4ef6\u3002\\n\\n```tsx\\nuseEffect(() => {\\n  if (!isEmpty(variableData)) {\\n    const monacoVariableTips = new MonacoVariableTips({ variableData, level: 2 });\\n    // \u4e3a\u7f16\u8f91\u5668\u6ce8\u5165\u53d8\u91cf\u63d0\u793a\\n    monacoCompletionItemProviderRef.current = monacoRef.current?.languages.registerCompletionItemProvider(\\n      \'javascript\',\\n      {\\n        provideCompletionItems: (model, position) => {\\n          monacoVariableTips.parseContinuousContent(model, position);\\n          return {\\n            suggestions: monacoVariableTips.getSuggestions() as any,\\n          };\\n        },\\n        triggerCharacters: [\'.\'],\\n      }\\n    );\\n    // \u9f20\u6807\u60ac\u6d6e\u63d0\u793a\\n    monacoHoverProviderRef.current = monaco.languages.registerHoverProvider(\'javascript\', {\\n      provideHover: (model, position) => {\\n        monacoVariableTips.parseContinuousContent(model, position);\\n        return {\\n          contents: monacoVariableTips.getHover(),\\n        };\\n      },\\n    });\\n  }\\n  return () => {\\n    // \u9000\u51fa\u65f6,\u9500\u6bc1\u6ce8\u518c\u7684\u5185\u5bb9\u907f\u514d\u91cd\u590d\u521b\u5efa\\n    monacoCompletionItemProviderRef.current?.dispose();\\n    monacoHoverProviderRef.current?.dispose();\\n  };\\n}, [variableData]);\\n```"},{"id":"Promise \u77e5\u8bc6\u70b9","metadata":{"permalink":"/apaas-front-doc/blog/Promise \u77e5\u8bc6\u70b9","source":"@site/blog/2022-08-01-Promise/index.md","title":"Promise \u77e5\u8bc6\u70b9","description":"\u56de\u8c03\u5730\u57df\u95ee\u9898","date":"2022-08-01T00:00:00.000Z","formattedDate":"2022\u5e748\u67081\u65e5","tags":[{"label":"JavaScript","permalink":"/apaas-front-doc/blog/tags/java-script"},{"label":"ES6","permalink":"/apaas-front-doc/blog/tags/es-6"},{"label":"Promise","permalink":"/apaas-front-doc/blog/tags/promise"}],"readingTime":6.625,"hasTruncateMarker":true,"authors":[{"name":"\u6c5f\u5357\u70df\u96e8","title":"\u70df\u82b1\u6613\u51b7","url":"https://github.com/hzm0321","imageURL":"https://wx.qlogo.cn/mmhead/Q3auHgzwzM7zVzxH0RqANaicqicqbupmUN6qB5KjBsLfRKf1JdT6UOAw/0","key":"hzm"}],"frontMatter":{"slug":"Promise \u77e5\u8bc6\u70b9","title":"Promise \u77e5\u8bc6\u70b9","authors":["hzm"],"tags":["JavaScript","ES6","Promise"]},"prevItem":{"title":"react-monaco-editor \u5e38\u7528\u914d\u7f6e\u9879","permalink":"/apaas-front-doc/blog/react-monaco-editor \u5e38\u7528\u914d\u7f6e\u9879"}},"content":"### \u56de\u8c03\u5730\u57df\u95ee\u9898\\n\\n\u4f20\u7edf\u7684\u5f02\u6b65\u7f16\u7a0b\u65b9\u5f0f\u901a\u8fc7\u56de\u8c03\u51fd\u6570\uff0c\u5904\u7406\u5f02\u6b65\u4efb\u52a1\u5230\u671f\u7684\u6267\u884c\u95ee\u9898\u3002\u800c\u5f02\u6b65\u4efb\u52a1\u4e4b\u95f4\u5982\u679c\u4ea7\u751f\u4f9d\u8d56\u5173\u7cfb\uff0c\u5c31\u4f1a\u9677\u5165\u201c\u56de\u8c03\u5730\u57df\u201d\u95ee\u9898\u3002\\n\\n![callback](./callback.png)\\n\\n### \u72b6\u6001\\n`Promise` \u7684\u72b6\u6001`\u4e0d\u53ef\u9006`  \\n\u67093\u4e2a\u72b6\u6001\\n- **Pending**\\n- **Resolved**\\n- **Rejected**\\n\\n### \u9759\u6001\u65b9\u6cd5\\n\\n- **Promise.resolve**\\n- **Promise.reject**\\n\\n:::tip\\n\\n\u53ea\u63a5\u6536\u7b2c\u4e00\u4e2a\u53c2\u6570\\n\\n:::\\n\\n\x3c!--truncate--\x3e\\n\\n### \u5b9e\u4f8b\u65b9\u6cd5\\n\\n#### .then\\n\\n\u63a5\u65362\u4e2a\u53c2\u6570\uff0c`resolve` \u65b9\u6cd5\u548c `reject` \u65b9\u6cd5\uff0c\u5f62\u53c2\u4e3a\u4e0a\u4e00\u6b21\u72b6\u6001\u7684\u503c\u3002\u4e14\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u4e92\u65a5\uff0c\u53ea\u80fd\u8fdb\u5165\u4e00\u4e2a\u3002  \\n\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise \u5b9e\u4f8b\u3002\\n\\n**\u4f20\u9012\u7ed9\u4e0b\u4e00\u4e2a resolve \u72b6\u6001\u7684\u65b9\u5f0f\uff1a**\\n- return \u4e00\u4e2a\u503c\\n- return Promise.resolve(\u503c)\\n- \u4e0d\u5199 return\uff0c\u9ed8\u8ba4\u8fd4\u56de resolved \uff0c\u4f20\u9012\u7684\u503c\u4e3a `undefined`\\n\\n**\u4f20\u9012\u7ed9\u4e0b\u4e00\u4e2a rejected \u72b6\u6001\u7684\u65b9\u5f0f\uff1a**\\n- throw \u629b\u51fa\u4e00\u4e2a\u9519\u8bef\\n- return Promise.reject(\u503c)\\n- \u9519\u8bef\u4ee3\u7801\\n\\n#### .catch\\n\u63a5\u65361\u4e2a\u53c2\u6570\uff0c`reject` \u65b9\u6cd5\u3002\u5f62\u53c2\u4e3a\u4e0a\u4e00\u6b21 reject \u72b6\u6001\u7684\u503c\\n\u8fd4\u56de\u503c\u540c `.then` ,\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a`\u65b0\u7684 Promise`\\n\\n#### .finally\\n\u63a5\u6536\u4e00\u4e2a\u65b9\u6cd5\uff0c\u6ca1\u6709\u4efb\u4f55\u72b6\u6001\u503c\\n\u8fd4\u56de\u503c\u540c `.then` ,\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a`\u65b0\u7684 Promise`\\n\\n\u8fd4\u56de\u5f85\u5b9a Promise \uff0c\u53ea\u8981 Promise \u4e00\u89e3\u51b3\uff0c\u65b0 Promise \u4ecd\u7136\u4f1a\u539f\u6837\u540e\u4f20\u521d\u59cb\u7684 Promise\\n\\n```javascript\\nlet p1  = Promise.resolve(1);\\nlet p2 = p1.finally(() => {\\n  return new Promise((resolve, reject)=>{\\nsetTimeout(resolve,100,2)\\n  })\\n})\\n\\n\\n\\nsetTimeout(() => {\\n  setTimeout(console.log, 0, p2); // 1\\n},200)\\n```\\n### Thenable \u63a5\u53e3\u5bf9\u8c61\\n\\n\u5982\u679c\u8fd4\u56de\u4e00\u4e2a \u5b9e\u73b0\u4e86 `thenable` \u7684\u63a5\u53e3\u5bf9\u8c61\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 Promise \u4e0a\u7684 resolve \u548c reject \u65b9\u6cd5\u3002\\n\\n```javascript\\nconst p  = new Promise((resolve, reject) => {\\n  resolve(1)\\n}).then(() => {\\n  return {\\n    // \u5b9e\u73b0\u4e86 thenable \u63a5\u53e3\u5bf9\u8c61\\n    then: (resolve, reject) => {\\n      reject(2);\\n    }\\n  }\\n}).catch((error) => {\\n  return error\\n})\\n\\nsetTimeout(console.log,0,p)\\n```\\n\\n### \u5e42\u7b49\u6027(resolve)\\n\\n\u7ed9 Promise \u4f20\u5165 \u9759\u6001 Promise\uff0c\u7c7b\u4f3c\u4e8e\u7a7a\u5305\u88c5  \\n\\n```javascript\\nconst p = Promise.resolve(1);  \\nconsole.log(p === Promise.resolve(p)); // true  \\n```\\n\\n:::tip\\n\\n`Promise.reject` \u6ca1\u6709\u5e42\u7b49\u6027\uff0c\u7ed9\u5b83\u4f20\u5165\u4e00\u4e2a Promise\u5bf9\u8c61\uff0c\u4f1a\u53d8\u6210\u62d2\u7edd\u7684\u7406\u7531\\n\\n:::\\n\\n### \u4e8c\u5143\u6027\\n\\n\u540c\u6b65\u5bf9\u8c61(\u5728\u540c\u6b65\u6267\u884c\u6a21\u5f0f\u4e2d\u4f7f\u7528)\uff0c\u4f46\u4e5f\u662f\u5f02\u6b65\u6267\u884c\u6a21\u5f0f\u7684\u5a92\u4ecb \u3002\\n\\n```javascript\\n try {\\n    Promise.reject(new Error(\\"bar\\"));\\n  } catch (e) {\\n    // Promise.reject \u4e0d\u4f1a\u8fdb\u5165\\n    console.log(e);\\n  }\\n```\\n\\n### \u503c\u7a7f\u900f\\n\\n\u4f20\u7ed9 `then()` \u7684\u4efb\u4f55`\u975e\u51fd\u6570\u7c7b\u578b\u7684\u53c2\u6570`\u90fd\u4f1a\u88ab\u9759\u9ed8\u5ffd\u7565\\n\\n```javascript\\nlet p1  = Promise.resolve(1);\\nlet p2 = p1.then(2).then({}).then(undefined).then((res) => {\\n  console.log(res); // 1\\n})\\n```\\n\\n### \u72b6\u6001\u7a7f\u900f\\n\\n\u5e76\u4e0d\u662f\u8c03\u7528\u4e86 `resolve \u65b9\u6cd5`\u5c31\u4e00\u5b9a\u4f1a\u8fdb\u5165\u5b8c\u6210\u72b6\u6001\uff0c\u5982\u679c\u4f20\u5165\u7684\u662f\u4e00\u4e2a `promise \u72b6\u6001`\uff0c\u90a3\u4e48\u6700\u7ec8\u72b6\u6001\u7531\u8be5 promise \u72b6\u6001\u51b3\u5b9a\\n\\n### \u4e8b\u4ef6\u5faa\u73af\u673a\u5236\\n\\nPromise \u5c5e\u4e8e `\u5fae\u4efb\u52a1`\\n\\n### \u6279\u5904\u7406\\n\\n\u53ef\u4ee5\u7ed9 Promise \u6dfb\u52a0\u591a\u4e2a\u4efb\u52a1\uff0c\u6309\u6dfb\u52a0\u7684\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\\n\\n```javascript\\nlet p1 = Promise.resolve();\\np1.then(() => setTimeout(console.log, 0, 1));\\np1.then(() => setTimeout(console.log, 0, 2));\\n// 1\\n// 2\\n```\\n\\n### \u4e2d\u65ad Promise \u94fe\\n\\n\u5728\u94fe\u8def\u4e2d\u8fd4\u56de `pending` \u72b6\u6001\u7684 Promise \uff0c\u5373\u53ef\u4e2d\u65ad\u540e\u7eed\u94fe\u8def\u3002\\n\\n```javascript\\nconst p1 = new Promise((resolve, reject) => {\\n  resolve(1);\\n}).then((res) => {\\n  console.log(res);\\n  // \u4e2d\u65ad\\n  return new Promise(()=>{})\\n}).then((res) => {\\n  console.log(res)\\n})\\n```\\n\\n### Promise \u961f\u5217\\n\\n**reduce \u5b9e\u73b0**\\n\\n```javascript\\nconst p1 = new Promise((resolve, reject) => {\\n  setTimeout(() => {\\n    resolve(1)\\n  },2000)\\n})\\n\\nconst p2 = new Promise((resolve) => {\\n  setTimeout(() => {\\n    resolve(2)\\n  },1000)\\n});\\n\\nconst p3 = new Promise((resolve) => {\\n  setTimeout(() => {\\n    resolve(3)\\n  },1000)\\n});\\n\\nconst promiseQueue = [p1,p2,p3];\\npromiseQueue.reduce((pre, cur) => {\\n  return pre.then(() =>{\\n    return cur.then((res) => {\\n      console.log(res)\\n    })\\n  })\\n},Promise.resolve())\\n```\\n\\n**forEach \u5b9e\u73b0**\\n\\n```javascript\\nconst numbs = [1,2,3,4];\\n\\nlet promise = Promise.resolve();\\n\\nnumbs.forEach((v) => {\\n  promise = promise.then(() => {\\n    return new Promise((resolve)=>{\\n      setTimeout(() => {\\n        console.log(v);\\n        resolve();\\n      },1000)\\n    })\\n  })\\n})\\n```\\n\\n### Promise.all\\n\\n\u63a5\u6536\u4e00\u4e2a Promise \u5b9e\u4f8b\u6570\u7ec4  \\n\u6570\u7ec4\u5185\u7684\u5168\u90e8 Promise \u5b9e\u4f8b`\u5168\u90fd\u53d8\u6210\u4e86 resolve \u72b6\u6001`\uff0c\u5c31\u8fdb\u5165 resolved \u72b6\u6001\u3002\u5982\u679c`\u6709\u4e00\u4e2a rejected` \u5c31\u8fdb\u5165 rejected \u72b6\u6001\u3002  \\n\u5982\u679c\u8fdb\u5165 resolved \u72b6\u6001\uff0c\u8fd4\u56de\u7684\u65b0 Promise \u5b9e\u4f8b\u7b2c\u4e00\u4e2a\u65b9\u6cd5\u53c2\u6570\u4f1a\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u5165\u6bcf\u9879\u7ed3\u679c\u3002  \\n\u5982\u679c\u8fdb\u5165 rejected \u72b6\u6001\uff0c\u8fd4\u56de\u7684\u65b0 Promise \u5b9e\u4f8b\u7b2c\u4e8c\u4e2a\u65b9\u6cd5\u53c2\u6570\u4f1a\u4ee5\u5355\u4e2a\u503c\u7684\u5f62\u5f0f\u4f20\u5165\u62d2\u7edd\u7684\u7ed3\u679c\u3002  \\n\\n```javascript\\n// resolved \u72b6\u6001\\nconst p1 = Promise.resolve(1);\\nconst p2 = Promise.resolve(2);\\n\\nPromise.all([p1, p2]).then((res) => {\\n  console.log(res); // \u6253\u5370 [1,2]\\n}, (res) => {\\n  console.log(res);\\n})\\n\\n// rejected \u72b6\u6001\\nconst p1 = Promise.resolve(1);\\nconst p2 = Promise.reject(2);\\n\\nPromise.all([p1, p2]).then((res) => {\\n  console.log(res);\\n}, (res) => {\\n  console.log(res); // \u6253\u5370 2\\n})\\n```\\n\\n### Promise.race\\n\\n\u63a5\u6536\u4e00\u4e2a Promise \u5b9e\u4f8b\u6570\u7ec4  \\n\u53ea\u8981 Promise \u5b9e\u4f8b\u6570\u7ec4\u4e4b\u4e2d`\u6709\u4e00\u4e2a\u5b9e\u4f8b\u7387\u5148\u6539\u53d8\u72b6\u6001`\uff0cPromise.reace \u7684\u72b6\u6001\u5c31`\u8ddf\u7740\u6539\u53d8`\u3002\u90a3\u4e2a\u7387\u5148\u6539\u53d8\u7684 Promise \u5b9e\u4f8b\u7684\u8fd4\u56de\u503c\uff0c\u5c31\u4f20\u9012\u7ed9 Promise.reace \u7684\u56de\u8c03\u51fd\u6570\u3002  \\n\u8fd4\u56de\u7684\u65b0\u7684 Promise \u5b9e\u4f8b\uff0c\u4f1a\u4f20\u5165\u7b2c\u4e00\u4e2a\u6539\u53d8\u7684 Promise \u7ed3\u679c\u3002\\n\\n```javascript\\nconst p1 = Promise.resolve(1); // \u7387\u5148\u6539\u53d8\\nconst p2 = Promise.reject(2);\\n\\nPromise.race([p1, p2]).then((res) => {\\n  console.log(res); // 1\\n}, (res) => {\\n  console.log(res);\\n})\\n```\\n\\n### Promise.allSettled\\n\\n\u63a5\u6536\u4e00\u4e2a Promise \u5b9e\u4f8b\u6570\u7ec4  \\n\u53ea\u6709\u7b49\u5230\u53c2\u6570\u6570\u7ec4\u7684`\u6240\u6709 Promise \u5bf9\u8c61\u90fd\u53d1\u751f\u72b6\u6001\u53d8\u66f4\uff08\u4e0d\u7ba1\u662f resolved \u8fd8\u662f rejected \uff09`\uff0c\u8fd4\u56de\u7684 Promise \u5bf9\u8c61\u624d\u4f1a\u53d1\u751f\u72b6\u6001\u53d8\u66f4\u3002  \\n\u8fd4\u56de\u7684\u65b0\u7684 Promise \u5b9e\u4f8b\uff0c\u53ea\u63a5\u6536\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u4e14\u72b6\u6001\u4e3a resolved,\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u5165\u6bcf\u9879\u7ed3\u679c\u3002\u6570\u7ec4\u7531\u5bf9\u8c61\u7ec4\u6210\u3002\u5bf9\u8c61\u4e2d\u5305\u542b2\u4e2a\u503c\u2014\u2014status\uff08Promise\u72b6\u6001\uff09 \u548c value\u3002\\n\\n```javascript\\nconst p1 = Promise.resolve(1);\\nconst p2 = Promise.reject(2);\\n\\nPromise.allSettled([p1, p2]).then((res) => {\\n  console.log(res); // [{ status: \'fulfilled\', value: 1 },{ status: \'rejected\', reason: 2 }]\\n})\\n```\\n\\n### Promise.any(ES 2021 \u65b0\u7279\u6027)\\n\\n\u63a5\u6536\u4e00\u4e2a Promise \u5b9e\u4f8b\u6570\u7ec4  \\n\u53ea\u8981\u53c2\u6570\u5b9e\u4f8b`\u6709\u4e00\u4e2a\u53d8\u6210 fulfilled \u72b6\u6001\uff0c\u5305\u88c5\u5b9e\u4f8b\u5c31\u4f1a\u53d8\u6210 fulfilled \u72b6\u6001`\uff1b\u5982\u679c\u6240\u6709\u53c2\u6570\u5b9e\u4f8b\u90fd\u53d8\u6210 rejected \u72b6\u6001\uff0c\u5305\u88c5\u5b9e\u4f8b\u5c31\u4f1a\u53d8\u6210 rejected \u72b6\u6001\u3002\\n\\n### \u5c01\u88c5\u4e00\u4e2a\u7b80\u6613\u5b9a\u65f6\u5668\\n\\n```javascript\\nfunction timeout(delay = 1000) {\\n  return new Promise((resolve, reject) => {\\n    setTimeout(() => {\\n      resolve();\\n    }, delay)\\n  })\\n}\\n```\\n\\n### \u8bed\u6cd5\u7cd6 async await"}]}')}}]);