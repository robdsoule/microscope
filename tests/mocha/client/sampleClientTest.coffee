unless typeof MochaWeb is "undefined"
  MochaWeb.testOnly ->
    describe "a group of tests", ->
      it "should respect equality", ->
        chai.assert.equal 5, 5
        return
      return
    return

# #Original Javascript
#
# if (!(typeof MochaWeb === 'undefined')){
#   MochaWeb.testOnly(function(){
#     describe("a group of tests", function(){
#       it("should respect equality", function(){
#         chai.assert.equal(5,5);
#       });
#     });
#   });
# }
