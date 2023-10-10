import { Categories } from "./Categories";

/**
 * Interface for Service Category
 */
export interface IServiceCategory {
  /**
   * Get Category By Id
   * @param {string} id - The id of the user
   * @returns {Promise<Categories[]>} - Promise of an array of singel Category
   */
  getCategoryById(id: string): Promise<Categories[] | null>;

  /**
   * Get All Categorys 
   * @returns {Promise<Categories[]>} - Promise of an array of all  Categorys
   
   */
  getAllCategories(): Promise<Categories[]>;

  /**
   * Create Category
   * @param  { Express.Multer.File[] } files 
   * @param  { string  } token
   * @param  { Categories } category
   * @returns {Promise<void>} - Promise of Create Category
   
   */
  createCategory(
    files: Express.Multer.File[],
    token: string,
    category: Categories
  ): Promise<void>;

  /**
   * Update Category
   * @param  { Categories } category
   * @param {string} id
   * @returns {Promise<void>} - Promise of Update Category
   
   */
  updateCategory(id: string, category: Categories): Promise<void>;

  /**
   * Filter Category By Query
   * @param  { Categories } category
   */
  filterCategories(category: Categories): Promise<{
    dataLength: any;
    data: Categories[];
  }>;

  /**
   * Delete Category By Id
   * @param {string} id - The id of the user
   * @returns {Promise<void>} - Promise of an array of singel Category
   */
  deleteCategory(id: string): Promise<void>;
}
