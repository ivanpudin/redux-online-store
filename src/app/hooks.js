import { useDispatch, useSelector } from "react-redux";

// Use throughtout application instead of plain 'useDispatch' and 'useSelector'.
export const useAppDispatch = () => useDispatch();
export const useAppSelector = () => useSelector();
