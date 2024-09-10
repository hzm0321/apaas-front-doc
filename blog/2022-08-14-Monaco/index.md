---
slug: react-monaco-editor 常用配置项
title: react-monaco-editor 常用配置项
authors: [hzm]
tags: [monaco-editor]
---

### 基础使用

```tsx
import React, { useState, useCallback, useRef } from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor";

const Demo = () => {
  const [value, setValue] = useState("");

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(); // 编辑器实例
  const monacoRef = useRef<typeof monaco>(); // monaco 实例
  
  // 获取编辑器实例
  const editorDidMountHandle = useCallback(
    (editor: monaco.editor.IStandaloneCodeEditor, monacoIns: typeof monaco) => {
      editorRef.current = editor;
      monacoRef.current = monacoIns;
    },[]);

  return (
    <MonacoEditor
      language="javascript"
      height="100%"
      theme="vs"
      value={value}
      onChange={setValue}
      options={{
        roundedSelection: false,
        cursorStyle: "line",
        wordWrap: "on",
      }}
      editorDidMount={editorDidMountHandle}
    />
  );
};

```
`editorInstance` 和 `monacoInstance` 的区别：
 - `editorInstance`：主要作用于编辑器上操作的方法，例如编辑器写入操作等。
 - `monacoInstance`：主要是编辑器语言相关的内容，例如变量提示、鼠标悬浮提示等。

<!--truncate-->

### 配置项
- `value`: 编辑器初始显示文字
- `language`：语言支持
- dimension：初始编辑器尺寸
- inDiffEditor：是否作为 diff 编辑器中使用
- ariaLabel：aria-label 阅读辅助标签
- rulers：在指定的列上呈现竖线。默认为空数组
- wordSeparators：包含单词导航时使用的单词分隔符的字符串。默认为 `~!@#$%^&*()-=+[{]}\|;:'“,
- selectionClipboard：启用Linux主剪贴板。默认值为true。
- `lineNumbers`：控制行号的呈现。如果它是一个函数，它将在呈现行号时被调用，并将呈现返回值。否则，如果为真值，行号将正常呈现(相当于使用一个恒等函数)。否则，将不会呈现行号。默认为'on'。
- renderFinalNewline：当文件以换行符结束时，呈现最后一行号。默认值为true。
- selectOnLineNumbers：单击行号时是否应选择相应的行。默认值为true。
- lineNumbersMinChars：控制行号的字符宽度数量, 默认值为 5
- glyphMargin: 是否启用字形边距，默认 false
- lineDecorationsWidth：编辑器输入框与行号之间宽度，默认 10
- revealHorizontalRightPadding：当显示游标时，会向游标添加一个虚拟填充(px)，将其变成一个矩形。这个虚拟填充确保光标在到达视口边缘之前被显示出来。默认值为30 (px)
- roundedSelection：呈现带有圆角边框的编辑器选择。默认值为true。
- extraEditorClassName：添加额外的样式
- `readOnly`：是否只读
- renderValidationDecorations：编辑器是否应该呈现验证装饰。默认为 ‘editable’。
- scrollbar：控制滚动条的参数
- minimap：控制缩略图
- find：控制查找组件行为
- fixedOverflowWidgets：将溢出小部件显示为固定状态。默认值为false。
- overviewRulerLanes：总览标尺应该显示的垂直列数。默认为3。
- overviewRulerBorder：控制是否应该在概览标尺周围绘制边框。默认值为true。
- cursorBlinking：控制光标的动画样式，可能的值为'blink'， 'smooth'， 'phase'， 'expand'和'solid'。默认为“blink”。
- mouseWheelZoom：当使用鼠标滚轮并按住Ctrl键时，可以放大编辑器中的字体。默认值为false。
- mouseStyle：控制鼠标指针样式，'text'或'default'或'copy'默认为'text'
- cursorSmoothCaretAnimation：启用平滑插入符号动画。默认值为false。
- cursorStyle：光标样式，可选 'line' | 'block' | 'underline' | 'line-thin' | 'block-outline' | 'underline-thin' 默认 'line'
- cursorWidth：光标宽度
- fontLigatures：是否启用 font ligatures，默认 false
- disableLayerHinting：禁止对编辑器边距和行图层使用“transform:translate3d（0px，0px，0px）”。“transform:translate3d（0px，0px，0px）”的用法可以作为浏览器创建额外层的提示。默认值 false
- disableMonospaceOptimizations：禁用monospace字体的优化。默认值为false。
- hideCursorInOverviewRuler：光标是否隐藏在概览标尺中。默认值为false。
- scrollBeyondLastLine：使滚动可以在最后一行之后移动一个屏幕大小。默认值为true。
- scrollBeyondLastColumn：启用滚动可以超越最后一列的多个列。默认为5。
- smoothScrolling：启用编辑器滚动到一个位置的动画。默认值为false。
- `automaticLayout`：编辑器将设置一个间隔时间来检查其dom节点大小是否已更改。启用此功能可能会对性能产生严重影响。默认值 false
- `wordWrap`：设置编辑器的换行.默认 "off".
- wordWrapColumn：wordWrap设置为wordWrapColumn生效，默认值 80.
- wordWrapMinified：当文本看起来是一个缩小/生成的文件时强制换行。默认值为true。
- wrappingIndent：控制换行行的缩进。可以是:'none'， 'same'， 'indent'或'deepIndent'。在vscode中默认为'same'，在摩纳哥编辑器中默认为'none'
- wrappingStrategy：换行策略. 默认 'simple'.
- wordWrapBreakBeforeCharacters：配置换行字符。在这些字符之前将引入一个中断 Defaults to '([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋'
- wordWrapBreakAfterCharacters：配置换行字符。在这些字符之后将引入中断
- stopRenderingLineAfter：停止渲染x个字符后的行 Defaults to 10000. 使用-1永不停止渲染
- hover：配置 hover
- links：启用检测链接并使其可单击. 默认 true.
- colorDecorators：启用内联颜色装饰器和颜色选择器渲染
- comments：控制编辑器中的注释行为
- contextmenu：启用自定义快捷菜单。默认值为true。
- mouseWheelScrollSensitivity：一个乘数，用于鼠标滚轮滚动事件的deltaX和deltaY。默认为1。
- fastScrollSensitivity：当按下Alt键时，FastScrolling倍率默认为5。
- multiCursorModifier：用于用鼠标添加多个游标的修饰符。默认为“alt”
- multiCursorMergeOverlapping：合并重复选择。默认值为true
- multiCursorPaste：配置粘贴行数等于游标数的文本时的行为。默认为“spread”。
- suggest：提示建议
- quickSuggestions：是否启用快速建议，默认 true
- quickSuggestionsDelay：快速建议延迟，默认 10 毫秒
- parameterHints：参数提示选项。
- autoClosingBrackets：自动关闭括号的选项。默认为语言定义的行为。
- formatOnType：在类型上启用格式。默认值为false。
- formatOnPaste：启用粘贴格式。默认值为false。
- dragAndDrop：控制编辑器是否允许通过拖放移动选择项。默认值为false。
- suggestOnTriggerCharacters：启用建议框在触发字符时弹出。默认值为true。
- acceptSuggestionOnEnter：按下回车接受建议， 默认 'on'
- acceptSuggestionOnCommitCharacter：接受语言提供的定义字符的建议。默认值为true。
- snippetSuggestions：使代码片段的建议。默认为true。
- emptySelectionClipboard：不带选定项的复制复制当前行。
- copyWithSyntaxHighlighting：复制语法高亮显示。
- suggestSelection：历史模式建议。
- suggestFontSize：建议字体大小
- suggestLineHeight：建议文字行高
- tabCompletion：启用选项卡
- selectionHighlight：使选择突出显示。默认值为true。
- occurrencesHighlight：启用语义突出显示。默认值为true。
- codeLens：显示code len默认为 true。
- lightbulb：控制代码动作灯泡的行为和呈现。
- codeActionsOnSaveTimeout：保存时运行代码操作的 time。
- folding：支持代码折叠。默认值为true。
- foldingStrategy：选择折叠策略。'auto'使用为当前文档提供的策略，'indentation'使用基于缩进的折叠策略。默认为“auto”。
- foldingHighlight：对折叠区域启用高亮显示。默认值为true。
- showFoldingControls：控制边栏中的折叠操作是始终可见还是隐藏，除非鼠标在边栏上方。默认为“mouseover”。
- matchBrackets：启用匹配方括号的高亮显示。默认为“always”。
- renderWhitespace：启用空白的呈现。默认为 none。
- renderControlCharacters：启用控制字符的呈现。默认值为false。
- renderIndentGuides：启用缩进线的呈现。默认值为true。
- highlightActiveIndentGuide：启用突出显示活动缩进指南。默认值为true。
- renderLineHighlight：启用当前行高亮显示。默认为 all。
- useTabStops：是否在制表位之后插入和删除空格。
- fontFamily：字体
- fontWeight：字体宽度
- fontSize：字体大小
- lineHeight： 行高
- letterSpacing：字间距

### 插入内容
方式一：模拟键盘输入从光标后插入  
```tsx
const str = '待插入的内容'
editorInstance?.trigger('keyboard', 'type', { text: str });
```
方式二：直接从光标处插入内容
```tsx
// 快速插入
const code = '待插入的内容'
const position = editorInstance?.getPosition();
const selection = editorInstance?.getSelection();
editorInstance?.executeEdits('', [
  {
    range: {
      startLineNumber: position?.lineNumber || 0,
      startColumn: position?.column || 0,
      endLineNumber: selection?.endLineNumber || position?.lineNumber || 0,
      endColumn: selection?.endColumn || position?.column || 0,
    } as any,
    text: code,
  },
]);
```
### 代码格式化
```tsx
// 格式化
await editorInstance?.getAction('editor.action.formatDocument').run();
```

### 变量提示
```tsx
import React, { useState, useCallback, useRef, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor";

const Demo = () => {
  const [value, setValue] = useState("");

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(); // 编辑器实例
  const monacoRef = useRef<typeof monaco>(); // monaco 实例
  const monacoHoverProviderRef = useRef<monaco.IDisposable>(); // monaco 注册缓存
  const monacoCompletionItemProviderRef = useRef<monaco.IDisposable>(); // monaco 注册缓存

  useEffect(() => {
    // 为编辑器注入变量提示
    monacoCompletionItemProviderRef.current =
      monacoRef.current?.languages.registerCompletionItemProvider(
        "javascript",
        {
          provideCompletionItems: (model, position) => {
            // 只对当前编辑器实例进行处理
            if (model.uri.toString() === editorRef.current?.getModel()?.uri.toString()) {
              // 自定义变量提示规则
              return {
                suggestions,
              };
            }
          },
          triggerCharacters: ["."],
        }
      );
    // 鼠标悬浮提示
    monacoHoverProviderRef.current = monaco.languages.registerHoverProvider(
      "javascript",
      {
        provideHover: (model, position) => {
          // 只对当前编辑器实例进行处理
          if (model.uri.toString() !== editorRef.current?.getModel()?.uri.toString()) {
            // 自定义变量提示规则
            return {
              contents,
            };
          }
        },
      }
    );

    return () => {
      // 退出时,销毁注册的内容避免重复创建
      monacoCompletionItemProviderRef.current?.dispose();
      monacoHoverProviderRef.current?.dispose();
    };
  }, []);

  // 获取编辑器实例
  const editorDidMountHandle = useCallback(
    (editor: monaco.editor.IStandaloneCodeEditor, monacoIns: typeof monaco) => {
      editorRef.current = editor;
      monacoRef.current = monacoIns;
    },
    []
  );

  return (
    <MonacoEditor
      language="javascript"
      height="100%"
      theme="vs"
      value={value}
      onChange={setValue}
      options={{
        roundedSelection: false,
        cursorStyle: "line",
        automaticLayout: true,
        selectOnLineNumbers: true,
        wordWrap: "on",
      }}
      editorDidMount={editorDidMountHandle}
    />
  );
};
```
为了避免变量被重复注册，因此需要 `ref` 存一下变量提示实例，在销毁阶段注销变量注册。  

为了便于动态变量规则的使用，提供了一个的类，用于计算变量层级提示。

```tsx
import { isArray } from 'lodash';
import * as monaco from 'monaco-editor';

import {
  FormatFunctionProps,
  InsertFunctionProps,
} from '@/routes/ScriptEvent/EditPage/types/function';

interface MonacoVariableTipsProps {
  variableData: FormatFunctionProps[];
  level: number;
}

interface TipProps {
  word: string;
  remark?: string;
}

export class MonacoVariableTips {
  // 当前行输入的连续内容
  content: string | undefined;

  // 当前行输入的内容
  lineContent: string | undefined;

  // 刚输入的内容
  input: string | undefined;

  // 当前行输入的单词
  word: string | undefined;

  private model: monaco.editor.ITextModel | undefined;

  private position: monaco.Position | undefined;

  // 要提示的层级， 默认提示下一层
  private readonly level: number;

  // 完整的变量数据
  private readonly variableData: FormatFunctionProps[];

  /**
   * 为 monaco 编辑器添加变量提示
   * @param props
   */
  constructor(props: MonacoVariableTipsProps) {
    this.level = props.level || 1;
    this.variableData = props.variableData;
  }

  /**
   * 是否由 . 触发
   */
  get isDotTrigger() {
    return this.input === '.';
  }

  /**
   * 解析当前行
   */
  parseContinuousContent(model: monaco.editor.ITextModel, position: monaco.Position) {
    if (!position || !model) {
      throw new Error('position | model is undefined');
    }
    this.model = model;
    this.position = position;
    const { column, lineNumber } = this.position;
    this.lineContent = this.model.getLineContent(lineNumber);
    this.content =
      this.lineContent
        .slice(0, column - 1)
        .split(' ')
        .pop() || '';
    this.input = this.lineContent[column - 2];
    this.word = this.model.getWordAtPosition(position)?.word;
  }

  /**
   * 解析内容为变量层级
   * @param str
   * @param isFlat 是否打平为一维字符串数组
   */
  static analysisWords(str: string = '', isFlat?: boolean) {
    // 把 ... 替换成 ***
    const _str = str.replace(/\.\.\./g, '***');
    const res = _str
      .split('.')
      .filter(Boolean)
      .map((v) => {
        return {
          word: v.replace(/\*\*\*/g, '...'),
          match: v.match(/^\w*/g)?.join('')!,
        };
      });
    if (isFlat) {
      return res.map((v) => v.match);
    }
    return res;
  }

  /**
   * 根据输入在变量匹配 tree 中搜索命中的层级
   * @param inputWords
   */
  searchFunctionsVariable(inputWords: string[]) {
    let res: FormatFunctionProps[] = [];
    let target: FormatFunctionProps | undefined;
    inputWords.forEach((word, index) => {
      if (!target) {
        target = this.variableData.find((v) => v.match.startsWith(word));
        if (target && inputWords.length === index + 1) {
          // 最后一层
          res = [target];
        }
      } else if (inputWords.length === index + 1) {
        // 表示已经到目标最后一层，进行模糊搜索
        const r = target.children.filter((v) => v.match.startsWith(word));
        res = r;
      } else {
        target = target.children.find((v) => v.match.startsWith(word));
      }
    });

    return res;
  }

  /**
   * 深搜结果，拉平成一维数组
   * @param searchResult
   * @param isDotTrigger
   * @param inputLength
   */
  dfsSearchResult(searchResult: FormatFunctionProps[], isDotTrigger: boolean, inputLength: number) {
    const tips: TipProps[] = [];
    const { level } = this;

    const clearStartDot = (word: string = '') => {
      if (word.startsWith('.')) {
        return word.substring(1);
      }
      return word;
    };
    dfs(searchResult, { word: '' }, 0, {});

    function dfs(curSearchResult, curTip, curLevel, parentSearchResult) {
      // 边界
      if (!curSearchResult || curSearchResult.length === 0 || curLevel > level) {
        if (isDotTrigger) {
          if (curLevel === level) {
            // eslint-disable-next-line no-param-reassign
            curTip.word = curTip.word.substring(parentSearchResult.parentWord.length + 1);
          } else if (curLevel > level) {
            // eslint-disable-next-line no-param-reassign
            curTip.word = curTip.word.substring(inputLength + 1);
          }
        }
        // eslint-disable-next-line no-param-reassign
        curTip.word = clearStartDot(curTip.word);
        if (curTip.word) {
          tips.push(curTip);
        }
        return;
      }

      // 添加父级数据
      if (curLevel > 0) {
        const _tip = { ...curTip };
        if (!isDotTrigger) {
          _tip.word = clearStartDot(_tip.word);
          if (_tip.word) {
            tips.push(_tip);
          }
        }
      }

      // 如果还没到层级继续往下走
      curSearchResult.forEach((item) => {
        dfs(
          item.children,
          {
            ...curTip,
            word: `${curTip.word}.${item.word}`,
            remark: item.remark || curTip.remark,
          },
          curLevel + 1,
          item
        );
      });
    }

    return tips;
  }

  /**
   * 生成提示
   * @param tips
   */
  generateSuggestions(tips: TipProps[]) {
    return tips.map((item) => ({
      label: item.word,
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: item.word,
      documentation: item.remark,
      detail: item.remark,
      // range: {
      //   startLineNumber: 1,
      // },
    }));
  }

  /**
   * 生成悬浮提示数据格式
   * @param hoverTips
   */
  generateHover(hoverTips: FormatFunctionProps[]) {
    return hoverTips.map((item) => ({
      value: item.remark || '',
      isTrusted: true,
      supportThemeIcons: true,
    }));
  }

  getSuggestions() {
    const words = MonacoVariableTips.analysisWords(this.content, true) as string[];
    const searchResult = this.searchFunctionsVariable(words);
    const inputLength = words.join('').length;
    const tips = this.dfsSearchResult(searchResult, this.isDotTrigger, inputLength);
    const suggestions = this.generateSuggestions(tips);
    return suggestions;
  }

  getHover() {
    const words = MonacoVariableTips.analysisWords(this.content, true) as string[];
    if (isArray(words) && words.length > 0) {
      words[words.length - 1] = this.word!;
    }
    const hoverTips = this.searchFunctionsVariable(words);
    const hovers = this.generateHover(hoverTips);
    return hovers;
  }
}
```
相关类型文件
```ts
export interface FormatFunctionProps {
  word: string;
  match: string;
  children: FormatFunctionProps[];
  remark?: string;
  parentWord?: string;
}
```


仅需按照 `FormatFunctionProps[]` 类型传入变量规则即可，具体见项目文件。

```tsx
useEffect(() => {
  if (!isEmpty(variableData)) {
    const monacoVariableTips = new MonacoVariableTips({ variableData, level: 2 });
    // 为编辑器注入变量提示
    monacoCompletionItemProviderRef.current = monacoRef.current?.languages.registerCompletionItemProvider(
      'javascript',
      {
        provideCompletionItems: (model, position) => {
          // 只对当前编辑器实例进行处理
          if (model.uri.toString() !== editorRef.current?.getModel()?.uri.toString()) {
            monacoVariableTips.parseContinuousContent(model, position);
            return {
              suggestions: monacoVariableTips.getSuggestions() as any,
            };
          }
        },
        triggerCharacters: ['.'],
      }
    );
    // 鼠标悬浮提示
    monacoHoverProviderRef.current = monaco.languages.registerHoverProvider('javascript', {
      provideHover: (model, position) => {
        // 只对当前编辑器实例进行处理
        if (model.uri.toString() !== editorRef.current?.getModel()?.uri.toString()) {
          monacoVariableTips.parseContinuousContent(model, position);
          return {
            contents: monacoVariableTips.getHover(),
          };
        }
      },
    });
  }
  return () => {
    // 退出时,销毁注册的内容避免重复创建
    monacoCompletionItemProviderRef.current?.dispose();
    monacoHoverProviderRef.current?.dispose();
  };
}, [variableData]);
```

### 撤销/重做

```tsx
// 撤销
editorInstance.trigger('keyboard', 'undo', null);
// 重做
editorInstance.trigger('keyboard', 'redo', null);
```

### 汉化

安装 webpack 插件 `monaco-editor-chinese-plugin`，并在 `config/config.ts` 中配置

```ts
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
// This will right
const MonacoChinesePlugin = require('monaco-editor-chinese-plugin');

const config: IConfig = {
  chainWebpack: (c) => {
    c.plugin('monaco-editor-webpack-plugin').use(new MonacoWebpackPlugin({
      languages: ['javascript', 'typescript', 'sql', 'json'],
    }));
    // This will right
    c.plugin('monaco-editor-chinese-plugin').use(new MonacoChinesePlugin());
    // ......
  },
  // 其余配置 ......
};
export default config;
```

### 断点调试效果
<div align="center">
    <img src={require('./assets/debugger.png').default} alt="node" width="100%" />
</div>

实现一个能展示断点调试效果的编辑器。

代码如下：

index.jsx
```tsx
import React, { useCallback, useEffect, useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { MonacoEditorProps } from 'react-monaco-editor/src/types';
import * as monaco from 'monaco-editor';
import { isNumber, uniqWith } from 'lodash';

import './editor.css';

interface Props extends MonacoEditorProps {
  breakPoints: monaco.editor.IModelDeltaDecoration[]; // 断点标记
  onBreakPointsChange?: (breakPoints: monaco.editor.IModelDeltaDecoration[]) => void;
  onBreakPointsDataChange?: () => void; // 断点数据发生了变化
  stopBreakpoint?: number; // 当前断点停在哪一行
}

/**
 * 基于 monaco-editor 的设计的调试编辑器
 * @constructor
 */
const MonacoDebugger: React.FC<Props> = ({
  editorDidMount,
  onBreakPointsChange,
  onBreakPointsDataChange,
  breakPoints,
  stopBreakpoint,
  ...props
}) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(); // 编辑器实例
  const monacoRef = useRef<typeof monaco>(); // monaco 实例
  const decorationsRef = useRef<string[] | null>([]); // 装饰器缓存

  const stopBreakpointRef = useRef<number | undefined>(stopBreakpoint); // 当前断点停在哪一行

  useEffect(() => {
    stopBreakpointRef.current = stopBreakpoint;
    setCurrentBreakPoint(stopBreakpoint);
  }, [stopBreakpoint]);

  useEffect(() => {
    const model = editorRef.current?.getModel();
    if (model) {
      model.deltaDecorations([], breakPoints);
    }
  }, [breakPoints]);

  useEffect(() => {
    // 编辑器鼠标移动事件
    editorRef.current?.onMouseMove((e) => {
      if (
        e.target.detail &&
        e.target.detail.offsetX &&
        e.target.detail.offsetX >= 0 &&
        e.target.detail.offsetX <= 50
      ) {
        const line = e.target.position?.lineNumber;
        addFakeBreakPoint(line);
      } else {
        removeFakeBreakPoint();
      }
    });

    // 编辑器鼠标离开事件
    editorRef.current?.onMouseLeave(() => {
      removeFakeBreakPoint();
    });

    // 编辑器鼠标点击事件
    editorRef.current?.onMouseDown((e) => {
      if (
        e.target.detail &&
        e.target.detail.offsetX &&
        e.target.detail.offsetX >= 0 &&
        e.target.detail.offsetX <= 50
      ) {
        const line = e.target.position?.lineNumber || 0;
        let isChangeFlag = false;

        if (!hasBreakPoint(line)) {
          if (editorRef.current?.getModel()?.getLineContent(line).trim() !== '') {
            addBreakPoint(line);
            isChangeFlag = true;
          }
        } else {
          removeBreakPoint(line);
          isChangeFlag = true;
        }

        if (isChangeFlag) {
          onBreakPointsDataChange?.();
        }
      }
    });
  }, []);

  // 设置当前断点停在哪一行
  const setCurrentBreakPoint = (line?: number) => {
    const allDecorations = editorRef.current?.getModel()?.getAllDecorations();
    // 取消行上的装饰器
    const cancelLinesClassName = () => {
      if (!allDecorations) return;
      const lineBgDecorations = allDecorations.filter((v) => v.options.className);
      const lineBgIds = lineBgDecorations.map((v) => v.id);
      editorRef.current?.deltaDecorations(lineBgIds, []);
    };
    if (isNumber(line)) {
      cancelLinesClassName();
      // 添加断点行装饰器
      const curLineDecoration = {
        range: new monacoRef.current!.Range(line, 1, line, 1),
        options: {
          isWholeLine: true,
          className: 'breakpoints-line',
        },
      };
      editorRef.current?.deltaDecorations([], [curLineDecoration]);
    } else {
      cancelLinesClassName();
    }
  };

  const handleDeltaDecorationsUpdate = useCallback(() => {
    const model = editorRef.current?.getModel();
    if (model) {
      let _breakPoints = model
        .getAllDecorations()
        .filter((decoration) => decoration.options.linesDecorationsClassName === 'breakpoints')
        .map((v) => ({ range: v.range, options: v.options }));
      _breakPoints = uniqWith(_breakPoints, (arrVal, othVal) => {
        return arrVal.range.startLineNumber === othVal.range.startLineNumber;
      });
      onBreakPointsChange?.(_breakPoints);
    }
  }, []);

  // 该位置上是否已经存在断点
  const hasBreakPoint = useCallback((line) => {
    const decorations = editorRef.current?.getLineDecorations(line);
    if (decorations?.length) {
      for (const decoration of decorations) {
        if (decoration.options.linesDecorationsClassName === 'breakpoints') {
          return true;
        }
      }
    }
    return false;
  }, []);

  // 添加提示断点
  const addFakeBreakPoint = useCallback((line) => {
    const fakeBreakPointValue = {
      range: new monacoRef.current!.Range(line, 1, line, 1),
      options: {
        isWholeLine: true,
        linesDecorationsClassName: 'breakpoints-fake',
      },
    };
    if (decorationsRef.current) {
      decorationsRef.current =
        editorRef.current?.deltaDecorations(decorationsRef.current, [fakeBreakPointValue]) || [];
    }
  }, []);

  // 删除提示断点
  const removeFakeBreakPoint = useCallback(() => {
    if (decorationsRef.current) {
      decorationsRef.current =
        editorRef.current?.deltaDecorations(decorationsRef.current, []) || [];
    }
  }, []);

  // 添加断点
  const addBreakPoint = useCallback((line) => {
    const model = editorRef.current?.getModel();
    if (!model) return;
    if (monacoRef.current) {
      const breakPointValue = {
        range: new monacoRef.current.Range(line, 1, line, 1),
        options: {
          isWholeLine: true,
          linesDecorationsClassName: 'breakpoints',
        },
      };
      model.deltaDecorations([], [breakPointValue]);
      handleDeltaDecorationsUpdate();
    }
  }, []);

  // 删除断点
  const removeBreakPoint = useCallback((line) => {
    if (editorRef.current) {
      const model = editorRef.current?.getModel();
      if (!model) return;
      let decorations;
      const ids: string[] = [];
      if (line !== undefined) {
        decorations = editorRef.current.getLineDecorations(line);
      } else {
        decorations = editorRef.current.getModel()?.getAllDecorations();
      }
      for (const decoration of decorations) {
        if (decoration.options.linesDecorationsClassName === 'breakpoints') {
          ids.push(decoration.id);
        }
      }
      if (ids?.length) {
        model.deltaDecorations(ids, []);
      }
      handleDeltaDecorationsUpdate();
    }
  }, []);

  // 获取编辑器实例
  const editorDidMountHandle = useCallback(
    (editor: monaco.editor.IStandaloneCodeEditor, monacoIns: typeof monaco) => {
      editorRef.current = editor;
      monacoRef.current = monacoIns;
      editorDidMount?.(editor, monacoIns);
    },
    []
  );

  return <MonacoEditor editorDidMount={editorDidMountHandle} {...props} />;
};

export default MonacoDebugger;

```
editor.css 文件

```css
.breakpoints-fake {
  width: 18px !important;
  height: 18px !important;
  left: 0 !important;
  top: 0 !important;
  cursor: pointer !important;
}

.breakpoints-fake::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #F23A50;
  opacity: 0.5;
  cursor: pointer;
}

.breakpoints {
  width: 10px !important;
  height: 10px !important;
  left: 9px !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  border-radius: 50%;
  background: #F23A50;
  cursor: pointer;
}

.breakpoints-line {
  background-color: rgba(242,58,80,0.4);
}
```
### 添加鼠标右键菜单

主要是使用 monaco 实例上的 `addAction` 方法，添加一个右键菜单。为了方便使用可以封装成一个 hook。  
这里以添加一个 js 代码美化功能的右键菜单为例，代码如下：
```ts
import * as monaco from 'monaco-editor';
import beautify from 'js-beautify';
import { useEffect } from 'react';

/**
 * 为 monaco-editor 右键选项添加代码美化功能
 * @param editorInstance
 */
const useEditorBeautifyJsCode = (editorInstance?: monaco.editor.IStandaloneCodeEditor) => {
  useEffect(() => {
    if (editorInstance) {
      editorInstance.addAction({
        id: 'beautifyJsCode',
        label: '美化 JS 代码',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyF],
        contextMenuGroupId: '2_customCommand',
        run() {
          const oldCode = editorInstance.getValue();
          const newCode = beautify(oldCode, {
            indent_size: 2,
          });
          editorInstance.executeEdits('', [
            {
              range: new monaco.Range(1, 1, editorInstance.getModel()!.getLineCount() + 1, 1),
              text: newCode,
            },
          ]);
        },
      });
    }
  }, [editorInstance]);
};

export default useEditorBeautifyJsCode;

```

使用
```tsx
import React, { useState, useCallback, useRef } from "react";
import MonacoEditor from "react-monaco-editor";
import { EditorDidMount} from 'react-monaco-editor/lib/types';

import useEditorBeautifyJsCode from './useEditorBeautifyJsCode'

const Demo = () => {

  const editorRef = useRef<Parameters<EditorDidMount>[0]>(); // 编辑器实例
  
  // This will right
  useEditorBeautifyJsCode(editorRef.current);

  // 获取编辑器实例
  const editorDidMountHandle: EditorDidMount = useCallback(
    (editor) => {
      editorRef.current = editor;
    },[]);

  return (
    <MonacoEditor
      language="javascript"
      height="100%"
      theme="vs"
      options={{
        roundedSelection: false,
        cursorStyle: "line",
        wordWrap: "on",
      }}
      editorDidMount={editorDidMountHandle}
    />
  );
};

```
