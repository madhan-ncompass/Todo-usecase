interface TodoItem  {
    text: string;
    isChecked: boolean;
    isDeleted: boolean;
  }

  interface ContextType {
    inputArrayCopy: TodoItem[];
    handleDeleteCompletedItem: () => void;
    handleFilter: (option:string) => void;
    handleItemAction: (index:number,option:string) => void;
    handleThemeColor: () => void;
    handleInputText: (inputCopy:string) => void;
    isDarkTheme: boolean;
    isLightTheme: boolean;
    styleTheme: StyleTheme;
  }

  interface StyleTheme {
    backgroundColor: string;
    textColor: string;
    bodyBackgroundColor: string;
    imgsrc: string;
  }

  export type {TodoItem,ContextType,StyleTheme}