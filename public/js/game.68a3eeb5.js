(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{a0b5:function(e,t,a){"use strict";a.r(t);var m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"game-details"},[a("the-title",{attrs:{title:"Teams",icon:"account-group",props:{gameId:e.gameId},component:"team-add-dialog"}}),e.gameTeams?a("cards-list",{attrs:{items:e.gameTeams,route:e.teamRoute},on:{favorite:e.toggleFavorite},scopedSlots:e._u([{key:"action",fn:function(e){var t=e.item;return[a("team-edit-dialog",{attrs:{team:t}})]}}],null,!1,3846198980)}):e._e()],1)},s=[],i=(a("b0c0"),a("f3f3")),n=a("882a"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("the-dialog",{attrs:{"activator-icon":"pencil",color:"#fff",header:"Edit team info",simple:"","submit-logic":e.onSubmit}},[a("v-text-field",{attrs:{clearable:"",rules:e.nameRules,label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-switch",{attrs:{label:"Delete team",color:"error","hide-details":""},model:{value:e.toDelete,callback:function(t){e.toDelete=t},expression:"toDelete"}})],1)},o=[],c=a("5f37"),d=a("2f62"),r={name:"TeamEditDialog",props:{team:{type:Object,required:!0}},data:function(){return{name:this.team.name,toDelete:!1,nameRules:c["d"]}},methods:Object(i["a"])(Object(i["a"])({},Object(d["b"])("teams",["updateTeam","deleteTeam"])),{},{onSubmit:function(){this.toDelete&&this.deleteTeam(this.team._id),this.updateTheTeam()},updateTheTeam:function(){var e={_id:this.team._id,gameId:this.team.gameId,name:this.name};this.updateTeam(e)}})},u=r,g=a("2877"),h=a("6544"),b=a.n(h),f=a("b73d"),p=a("8654"),T=Object(g["a"])(u,l,o,!1,null,null,null),j=T.exports;b()(T,{VSwitch:f["a"],VTextField:p["a"]});var O=a("1b9f"),v={name:"GameDetails",components:{TheTitle:n["a"],TeamEditDialog:j,CardsList:O["a"]},props:{gameId:{type:String,required:!0}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])("teams",["teams"])),Object(d["d"])("games",["games"])),Object(d["c"])("teams",["getGameTeams"])),Object(d["c"])("games",["getGame"])),{},{gameTeams:function(){return this.teams?this.getGameTeams(this.gameId):null},game:function(){return this.games?this.getGame(this.gameId):null},teamRoute:function(){return{name:"team",params:{teamId:""},query:{gameId:this.gameId}}}}),created:function(){this.loadData()},beforeDestroy:function(){this.setBackTitle()},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["b"])(["setBackTitle"])),Object(d["b"])("games",["loadGames"])),Object(d["b"])("teams",["updateTeam","loadTeams","loadGameTeams"])),{},{toggleFavorite:function(e){var t=Object(i["a"])(Object(i["a"])({},e),{},{gameId:this.gameId});this.updateTeam(t)},loadData:function(){var e=this;this.games||this.loadGames().then((function(){e.setBackTitle(e.getGame(e.gameId).name)})),this.teams||this.loadTeams(),null!=this.games&&this.setBackTitle(this.getGame(this.gameId).name)}})},I=v,D=Object(g["a"])(I,m,s,!1,null,null,null);t["default"]=D.exports}}]);
//# sourceMappingURL=game.68a3eeb5.js.map