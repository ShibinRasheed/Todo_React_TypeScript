export type Item = {
    id : string;
    title : string;
  }

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>