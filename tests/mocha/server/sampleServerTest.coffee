unless typeof MochaWeb is "undefined"
  MochaWeb.testOnly ->
    describe "Server initialization", ->
      it "should have a Meteor version defined", ->
        chai.assert Meteor.release
        return
      return
    return

# #Original Javascript
#
# if (!(typeof MochaWeb === 'undefined')){
#   MochaWeb.testOnly(function(){
#     describe("Server initialization", function(){
#       it("should have a Meteor version defined", function(){
#         chai.assert(Meteor.release);
#       });
#     });
#   });
# }
