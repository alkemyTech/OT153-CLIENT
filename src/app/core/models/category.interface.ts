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

export interface respFullCategories {
  success: boolean;
  data: fullCategoryData[];
  message: string;
}

export interface fullCategoryData {
  id?:                 number;
  name:               string;
  description:        string;
  image?:              string | ArrayBuffer | null;
  parent_category_id?: number;
  created_at?:         Date;
  updated_at?:         Date;
  deleted_at?:         Date;
}


export interface categoriesState {
  categories: fullCategoryData[],
  loaded: boolean,
  loading: boolean,
  error: any
};
