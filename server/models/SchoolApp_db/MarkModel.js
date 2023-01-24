import MarkModelGenerated from "./generated/MarkModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = MarkModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await MarkModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MarkModelGenerated,
  ...customModel
};
