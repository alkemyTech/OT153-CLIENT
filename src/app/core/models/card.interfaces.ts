/**
 *  @param name :string --> card title
 *  @param description :string --> card description
 *  @param image :string  --> image url 
 *  @param altText ?:string --> alt text to be displayed if there is no image. It is not required
 */
export interface ICard {
    name: string,
    description: string,
    image: string | undefined,
    altText?: string,
}