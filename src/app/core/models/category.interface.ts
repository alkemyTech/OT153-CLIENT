export interface respSimpleCategory {
  success: boolean;
  data: simpleCategoryData;
  message: string;
}
export interface respSimpleCategories {
  success: boolean;
  data: simpleCategoryData[];
  message: string;
}
export interface simpleCategoryData {
  id?: number;
  name?: string;
}