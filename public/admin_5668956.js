(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{744:function(n,e,a){},759:function(n,e,a){"use strict";a.r(e);var t=a(3),o=a.n(t),r=a(15),i=a.n(r),s=a(152),u=a.n(s),d=a(657),c=a.n(d),p=a(6),l=a(13),v=a(0),m=a.n(v),f=a(1),b=a.n(f),g=a(127),h=a(139),y=a.n(h),O=a(258),w=a.n(O),A=a(104),U=a.n(A),S=a(41),C=a.n(S),M=a(79),j=a.n(M),T=a(243),E=a(353),N=a(352),P=a(354),R=a(59),k=a(34),x=a(768),F=a(750),L=a(140),_=a(169),D=i()(U()("newMotd","setMotd",function(n){return n.motd}),U()("expanded","setExpanded",!1),C()(function(n){return{parsedMotd:Object(_.a)(Object(L.a)(n.newMotd),n.compileOptions),onExpand:function(){return n.setExpanded(!n.expanded)}}}),j()({onChange:function(n){return function(e){n.setMotd(e.target.value)}},onSubmit:function(n){return function(e){e.preventDefault(),n.onSetMotd(n.newMotd),n.setExpanded(!1)}}}));function z(n){n&&n.focus()}var B=m()(F.a,{}),I=m()(P.a,{},void 0,m()(R.a,{type:"submit",variant:"raised",color:"primary"},void 0,"Save")),H=function(n){var e=n.canChangeMotd,a=n.newMotd,t=n.parsedMotd,o=n.expanded,r=n.onChange,i=n.onSubmit,s=n.onExpand;return m()(T.a,{className:"AdminMotd"},void 0,m()(E.a,{title:"Message of the Day",action:e&&m()(k.a,{onClick:s},void 0,B)}),m()(N.a,{},void 0,t),m()(x.a,{in:o,unmountOnExit:!0},void 0,m()("form",{onSubmit:i},void 0,m()(N.a,{style:{paddingTop:0}},void 0,b.a.createElement("textarea",{className:"AdminMotd-field",rows:4,onChange:r,value:a,ref:z})),I)))};H.propTypes={},H.defaultProps={canChangeMotd:!1};var J=D(H),V=a(16),q=a(49),W=a(8).i,Y=Object(p.b)({motd:q.k,compileOptions:q.e,canChangeMotd:W}),G={onSetMotd:V.h},K=Object(l.b)(Y,G)(J),Q=m()("div",{},void 0,m()("p",{},void 0,"Note that the admin interface is not yet done and most things do not work. You can, however, configure the message of the day! :P"),m()(K,{})),X=function(){return Q};X.propTypes={};var Z=X,$=a(9),nn=a(764),en=a(763),an=a(762),tn=a(761),on=a(751),rn=a(765),sn=a(767),un=a(11),dn=a.n(un),cn=a(10),pn=a.n(cn),ln=a(5),vn=a.n(ln),mn=a(120),fn=a.n(mn),bn=a(769),gn=a(129),hn=a(766),yn=a(43),On=a(65),wn=a(47),An=i()(Object(On.a)(),C()(function(n){return{onUsernameClick:function(e){e.preventDefault(),n.openUserCard(n.user)}}})),Un=function(n){var e=n.user,a=n.onUsernameClick;return m()("button",{onClick:a},void 0,m()(wn.a,{user:e}))};Un.propTypes={};var Sn=An(Un),Cn=a(259),Mn=a(256),jn={width:48,paddingLeft:0,paddingRight:0},Tn=C()(function(n){return{className:vn()("AdminUserRow-cell",n.className)}})(sn.a),En=m()(Tn,{},void 0,"Email"),Nn=m()(hn.a,{}),Pn=m()(gn.a,{},void 0,"Ban"),Rn=function(n){function e(){for(var e,a,t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return e=a=n.call.apply(n,[this].concat(o))||this,a.state={open:!1,anchorEl:null},a.menu=fn()("menu"),a.handleOpenMenu=function(n){a.setState({open:!0,anchorEl:n.currentTarget})},a.handleCloseMenu=function(){a.setState({open:!1,anchorEl:null})},e||dn()(a)}return pn()(e,n),e.prototype.render=function(){var n=this.props.user,e=this.state,a=e.open,t=e.anchorEl;return m()(rn.a,{className:"AdminUserRow"},void 0,m()(Tn,{className:"AdminUserRow-avatar"},void 0,m()(yn.a,{user:n})),m()(Tn,{},void 0,m()(Sn,{user:n})),m()(Tn,{},void 0,Object(Mn.a)(n.createdAt,"date")),En,m()(Tn,{},void 0,n.roles.length>0&&m()(Cn.a,{roleName:n.roles[0]})),m()(Tn,{style:jn},void 0,m()(k.a,{onClick:this.handleOpenMenu,"aria-haspopup":"true","aria-owns":a?this.menu:null},void 0,Nn),m()(bn.a,{id:this.menu,open:a,anchorEl:t,onClose:this.handleCloseMenu},void 0,Pn)))},e}(b.a.Component);Rn.propTypes={};var kn=a(58),xn=a.n(kn),Fn=i()(C()(function(n){return{onFilterDebounced:xn()(n.onFilter,200)}}),j()({onChange:function(n){return function(e){return n.onFilterDebounced(e.target.value)}}})),Ln=function(n){var e=n.onChange;return m()("input",{type:"text",className:"AdminUserHeader-filter",onChange:e})};Ln.propTypes={};var _n=Fn(Ln),Dn=m()("span",{},void 0,"Managing Users:"),zn=function(n){var e=n.onFilter;return m()("div",{className:"AdminUserHeader"},void 0,Dn,m()("span",{},void 0,"Filter User:",m()(_n,{onFilter:e})))};zn.propTypes={};var Bn=zn,In=Object($.c)(),Hn=m()(sn.a,{className:"AdminUserRow-avatar"}),Jn=m()(sn.a,{}),Vn=function(n){var e=n.t,a=n.pageSize,t=n.currentPage,o=n.totalUsers,r=n.users,i=n.onChangePage,s=n.onFilter;return m()(b.a.Fragment,{},void 0,m()(Bn,{onFilter:s}),m()(nn.a,{},void 0,m()(en.a,{},void 0,m()(rn.a,{className:"AdminUserRow"},void 0,Hn,m()(sn.a,{},void 0,e("admin.users.user")),m()(sn.a,{},void 0,e("admin.users.joinedAt")),m()(sn.a,{},void 0,e("admin.users.email")),m()(sn.a,{},void 0,e("admin.users.roles")),Jn)),m()(an.a,{},void 0,r.map(function(n){return m()(Rn,{user:n})})),m()(tn.a,{},void 0,m()(rn.a,{},void 0,m()(on.a,{count:o,rowsPerPage:a,rowsPerPageOptions:[a],page:t,onChangePage:i})))))};Vn.propTypes={};var qn=In(Vn),Wn=a(14),Yn="uwave/admin/view/TRANSITION",Gn="uwave/admin/users/SET_USERS_FILTER",Kn="uwave/admin/users/LOAD_USERS_START",Qn="uwave/admin/users/LOAD_USERS_COMPLETE",Xn="uwave/admin/bans/LOAD_BANS_START",Zn="uwave/admin/bans/LOAD_BANS_COMPLETE",$n=function(n){return n.admin},ne=Object(p.a)($n,function(n){return n.users.currentPage}),ee=Object(p.a)($n,function(n){return n.users.totalUsers}),ae=Object(p.a)($n,function(n){return n.users.filter}),te=Object(p.a)($n,function(n){return n.users.users});function oe(){return{type:Kn}}function re(n){return{type:Qn,payload:{users:n.data,page:Math.floor(n.meta.offset/n.meta.pageSize)},meta:n.meta}}var ie=Object(p.b)({currentPage:ne,pageSize:function(){return 25},totalUsers:ee,users:te}),se={onLoadUsers:function(n){return void 0===n&&(n=null),function(e,a){var t=ae(a()),o={};return n&&(o.page=n),t&&(o.filter=t),e(Object(Wn.get)("/users",{qs:o,onStart:oe,onComplete:re}))}},onFilter:function(n){return void 0===n&&(n=null),{type:Gn,payload:{filter:n}}}},ue=i()(Object(l.b)(ie,se),C()(function(n){return{onChangePage:function(e,a){return n.onLoadUsers({offset:a*n.pageSize,limit:n.pageSize})},onFilter:function(e){n.onFilter(e),n.onLoadUsers({offset:0,limit:n.pageSize})}}}),c()({componentDidMount:function(){this.props.onChangePage(null,0)}}))(qn),de=a(84);function ce(){return{type:Xn}}function pe(n){var e=n.meta;return{type:Zn,payload:{bans:Object(de.a)(n)},meta:{page:Math.floor(e.offset/e.pageSize),size:e.pageSize}}}function le(){return Object(Wn.get)("/bans",{onStart:ce,onComplete:pe})}var ve=a(105),me=a.n(ve),fe=Object($.c)(),be={width:48,paddingRight:0},ge=function(n){var e=n.t,a=n.ban,t=n.onUnbanUser;return m()(rn.a,{},void 0,m()(sn.a,{style:be},void 0,m()(yn.a,{user:a.user})),m()(sn.a,{},void 0,m()(Sn,{user:a.user})),m()(sn.a,{},void 0,me()(a.duration,{long:!0})),m()(sn.a,{},void 0,a.reason||m()("em",{},void 0,e("admin.bans.noReason"))),m()(sn.a,{},void 0,m()(Sn,{user:a.moderator})),m()(sn.a,{},void 0,m()(R.a,{variant:"raised",onClick:t},void 0,e("admin.bans.unban"))))};ge.propTypes={};var he=fe(ge),ye=Object($.c)(),Oe=C()({style:{background:"#9d2053",padding:"12px 24px",lineHeight:"35px"}})("div"),we=C()({style:{background:"#631032",color:"#ffffff",border:0,marginLeft:12,paddingLeft:12,height:35},type:"text"})("input"),Ae=m()("span",{},void 0,"Managing Bans:"),Ue=m()(we,{}),Se=m()(sn.a,{}),Ce=function(n){var e=n.t,a=n.bans,t=n.onUnbanUser;return m()(b.a.Fragment,{},void 0,m()(Oe,{},void 0,Ae,m()("span",{style:{float:"right"}},void 0,"Filter User:",Ue)),m()(nn.a,{},void 0,m()(en.a,{},void 0,m()(rn.a,{},void 0,Se,m()(sn.a,{},void 0,e("admin.bans.user")),m()(sn.a,{},void 0,e("admin.bans.duration")),m()(sn.a,{},void 0,e("admin.bans.reason")),m()(sn.a,{},void 0,e("admin.bans.bannedBy")),m()(sn.a,{},void 0,e("admin.bans.actions")))),m()(an.a,{},void 0,a.map(function(n){return m()(he,{ban:n,onUnbanUser:function(){return t(n.user)}},n.user._id)}))))};Ce.propTypes={};var Me=ye(Ce),je={onLoadBans:le,onUnbanUser:function(n){return function(e){return e(function(n){return Object(Wn.del)("/bans/"+n._id,{})}(n)).then(function(){return e(le())})}}},Te={main:Z,users:ue,bans:i()(Object(l.b)(function(n){return{bans:n.admin.bans.bans}},je),c()({componentDidMount:function(){this.props.onLoadBans()}}))(Me)},Ee=y()(function(n){return{component:Te[n.page]}})(w()("component")),Ne=(a(744),m()(g.b,{primary:"Main"})),Pe=m()(g.b,{primary:"Users"}),Re=m()(g.b,{primary:"Bans"}),ke=function(n){var e=n.currentView,a=n.onTransition;return m()("div",{className:"AdminApp"},void 0,m()("div",{className:"AdminApp-menu"},void 0,m()(g.c,{},void 0,m()(g.a,{selected:"main"===e,className:"AdminApp-menuItem",onClick:function(){return a("main")}},void 0,Ne),m()(g.a,{selected:"users"===e,className:"AdminApp-menuItem",onClick:function(){return a("users")}},void 0,Pe),m()(g.a,{selected:"bans"===e,className:"AdminApp-menuItem",onClick:function(){return a("bans")}},void 0,Re))),m()("div",{className:"AdminApp-page"},void 0,m()(Ee,{page:e})))};ke.propTypes={};var xe=ke,Fe=a(24),Le=a(2),_e=a.n(Le),De={filter:null,currentPage:0,totalPages:0,totalUsers:0,users:[]};var ze={currentPage:{offset:0,limit:50},bans:[]};var Be=Object(Fe.combineReducers)({users:function(n,e){switch(void 0===n&&(n=De),e.type){case Gn:return _e()({},n,{filter:e.payload.filter});case Kn:return n;case Qn:return _e()({},n,{currentPage:e.payload.page,totalUsers:e.meta.results,totalPages:Math.ceil(e.meta.results/e.meta.pageSize),users:e.payload.users});default:return n}},bans:function(n,e){switch(void 0===n&&(n=ze),void 0===e&&(e={}),e.type){case Xn:return n;case Zn:return _e()({},n,{bans:e.payload.bans});default:return n}},view:function(n,e){return void 0===n&&(n="main"),e.type===Yn?e.payload:n}});var Ie=Object(p.a)($n,function(n){return n.view}),He=Object(p.b)({currentView:Ie}),Je={onTransition:function(n){return{type:Yn,payload:n}}};function Ve(n){(function(n){var e=n.getState();return e&&!!e.admin})(n)||function(n){n.mount("admin",Be)}(n)}var qe=i()(u()({store:o.a.object}),c()({componentWillMount:function(){this.props.store&&Ve(this.props.store)}}),Object(l.b)(He,Je));e.default=qe(xe)}}]);
//# sourceMappingURL=admin_5668956.js.map