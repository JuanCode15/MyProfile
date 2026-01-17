import{e as Fe,f as Oe,i as de}from"./chunk-42WRHT6T.js";import{a as gt,b as F,c as B,d as Ue,e as qe,f as h,g as X,h as _t,i as Ke,j as Ge,k as Ze,l as We,m as Yt,n as It,o as Xe}from"./chunk-5OVFRMKR.js";import{A as Ae,B as Ne,C as dt,D as ue,E as bt,F as ze,G as Lt,H as Q,I as Dt,J as Re,M as ft,P as He,S as $e,T as pe,V as mt,X as $,Y as je,Z as me,_ as ge,da as Qe,fa as Wt,ga as Xt,ha as ct,i as Gt,ia as C,j as Zt,k as it,l as Bt,m as lt,ma as U,n as z,r as W,u as Pt,v as Nt,w as ce,z as Ve}from"./chunk-LLNIVQ5Y.js";import{$ as jt,$a as w,Ab as D,Bb as De,Cb as nt,Db as se,Ea as St,Eb as rt,Ga as Ee,Gb as At,H as we,I as j,J as O,Ja as S,Jb as E,Ka as A,Kb as le,L as V,La as ut,Ma as N,N as g,Na as T,Oa as c,Rb as x,S as k,Sb as tt,T as M,U as P,Ua as ne,V as Se,Va as f,Wa as Be,X as ke,Xa as Pe,Ya as a,Za as p,_ as G,_a as m,a as Ot,ab as ie,bb as oe,cb as pt,da as wt,db as R,ea as J,eb as H,fb as L,gb as et,ha as I,hb as Vt,ib as q,ja as Qt,jb as l,kb as ot,lb as Z,mb as y,na as Me,nb as kt,ob as _,pb as v,qb as re,rb as Le,sa as ee,sb as Mt,ta as Ut,tb as qt,ub as Kt,va as d,vb as Et,wb as u,xb as K,yb as st,zb as ae}from"./chunk-5KCZO63R.js";var Ye=(()=>{class e extends B{autofocus=!1;focused=!1;platformId=g(Me);document=g(ke);host=g(Qt);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){W(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Ue.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275dir=ut({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[T]})}return e})();var Je=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var $n=`
    ${Je}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,jn={root:({instance:e})=>{let s=typeof e.value=="function"?e.value():e.value,t=typeof e.size=="function"?e.size():e.size,i=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,n=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":$(s)&&String(s).length===1,"p-badge-dot":mt(s),"p-badge-sm":t==="small"||i==="small","p-badge-lg":t==="large"||i==="large","p-badge-xl":t==="xlarge"||i==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},tn=(()=>{class e extends U{name="badge";style=$n;classes=jn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var en=new V("BADGE_INSTANCE");var zt=(()=>{class e extends B{$pcBadge=g(en,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=E();badgeSize=E();size=E();severity=E();value=E();badgeDisabled=E(!1,{transform:x});_componentStyle=g(tn);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-badge"]],hostVars:5,hostBindings:function(i,n){i&2&&(f("data-p",n.dataP),u(n.cn(n.cx("root"),n.styleClass())),qt("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[D([tn,{provide:en,useExisting:e},{provide:F,useExisting:e}]),N([h]),T],decls:1,vars:1,template:function(i,n){i&1&&K(0),i&2&&st(n.value())},dependencies:[z,C,X],encapsulation:2,changeDetection:0})}return e})(),Rt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[zt,C,C]})}return e})();var Qn=["*"],Un={root:"p-fluid"},on=(()=>{class e extends U{name="fluid";classes=Un;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var rn=new V("FLUID_INSTANCE"),he=(()=>{class e extends B{$pcFluid=g(rn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=g(on);static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,n){i&2&&u(n.cx("root"))},features:[D([on,{provide:rn,useExisting:e},{provide:F,useExisting:e}]),N([h]),T],ngContentSelectors:Qn,decls:1,vars:0,template:function(i,n){i&1&&(ot(),Z(0))},dependencies:[z],encapsulation:2,changeDetection:0})}return e})();var qn=["data-p-icon","angle-down"],an=(()=>{class e extends _t{static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["","data-p-icon","angle-down"]],features:[T],attrs:qn,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(i,n){i&1&&(P(),pt(0,"path",0))},encapsulation:2})}return e})();var Kn=["data-p-icon","angle-right"],sn=(()=>{class e extends _t{static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["","data-p-icon","angle-right"]],features:[T],attrs:Kn,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(i,n){i&1&&(P(),pt(0,"path",0))},encapsulation:2})}return e})();var Gn=["data-p-icon","bars"],ln=(()=>{class e extends _t{static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["","data-p-icon","bars"]],features:[T],attrs:Gn,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(i,n){i&1&&(P(),pt(0,"path",0))},encapsulation:2})}return e})();var Zn=["data-p-icon","spinner"],dn=(()=>{class e extends _t{pathId;onInit(){this.pathId="url(#"+gt()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["","data-p-icon","spinner"]],features:[T],attrs:Zn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(P(),ie(0,"g"),pt(1,"path",0),oe(),ie(2,"defs")(3,"clipPath",1),pt(4,"rect",2),oe()()),i&2&&(f("clip-path",n.pathId),d(3),Vt("id",n.pathId))},encapsulation:2})}return e})();var cn=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Wn=["content"],Xn=["loadingicon"],Yn=["icon"],Jn=["*"],fn=(e,s)=>({class:e,pt:s});function ti(e,s){e&1&&L(0)}function ei(e,s){if(e&1&&w(0,"span",7),e&2){let t=l(3);u(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),a("pBind",t.ptm("loadingIcon")),f("aria-hidden",!0)}}function ni(e,s){if(e&1&&(P(),w(0,"svg",8)),e&2){let t=l(3);u(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),a("pBind",t.ptm("loadingIcon"))("spin",!0),f("aria-hidden",!0)}}function ii(e,s){if(e&1&&(R(0),c(1,ei,1,4,"span",3)(2,ni,1,5,"svg",6),H()),e&2){let t=l(2);d(),a("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),d(),a("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function oi(e,s){}function ri(e,s){if(e&1&&c(0,oi,0,0,"ng-template",9),e&2){let t=l(2);a("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function ai(e,s){if(e&1&&(R(0),c(1,ii,3,2,"ng-container",2)(2,ri,1,1,null,5),H()),e&2){let t=l();d(),a("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),d(),a("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",se(3,fn,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function si(e,s){if(e&1&&w(0,"span",7),e&2){let t=l(2);u(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),a("pBind",t.ptm("icon")),f("data-p",t.dataIconP)}}function li(e,s){}function di(e,s){if(e&1&&c(0,li,0,0,"ng-template",9),e&2){let t=l(2);a("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function ci(e,s){if(e&1&&(R(0),c(1,si,1,4,"span",3)(2,di,1,1,null,5),H()),e&2){let t=l();d(),a("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),d(),a("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",se(3,fn,t.cx("icon"),t.ptm("icon")))}}function ui(e,s){if(e&1&&(p(0,"span",7),K(1),m()),e&2){let t=l();u(t.cx("label")),a("pBind",t.ptm("label")),f("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),d(),st(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function pi(e,s){if(e&1&&w(0,"p-badge",10),e&2){let t=l();a("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var mi={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!e.label&&!e.buttonProps?.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label,"p-button-icon-top":(e.iconPos==="top"||e.buttonProps?.iconPos==="top")&&e.label||e.buttonProps?.label,"p-button-icon-bottom":(e.iconPos==="bottom"||e.buttonProps?.iconPos==="bottom")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.cx("icon")).filter(([,s])=>!!s).reduce((s,[t])=>s+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Ft=(()=>{class e extends U{name="button";style=cn;classes=mi;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var un=new V("BUTTON_INSTANCE"),pn=new V("BUTTON_DIRECTIVE_INSTANCE"),mn=new V("BUTTON_LABEL_INSTANCE"),gn=new V("BUTTON_ICON_INSTANCE"),vt={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},hn=(()=>{class e extends B{ptButtonLabel=E();pButtonLabelPT=E();pButtonLabelUnstyled=E();$pcButtonLabel=g(mn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});constructor(){super(),J(()=>{let t=this.ptButtonLabel()||this.pButtonLabelPT();t&&this.directivePT.set(t)}),J(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ut({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(i,n){i&2&&Kt("p-button-label",!n.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,"ptButtonLabel"],pButtonLabelPT:[1,"pButtonLabelPT"],pButtonLabelUnstyled:[1,"pButtonLabelUnstyled"]},features:[D([Ft,{provide:mn,useExisting:e},{provide:F,useExisting:e}]),N([h]),T]})}return e})(),bn=(()=>{class e extends B{ptButtonIcon=E();pButtonIconPT=E();pButtonUnstyled=E();$pcButtonIcon=g(gn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});constructor(){super(),J(()=>{let t=this.ptButtonIcon()||this.pButtonIconPT();t&&this.directivePT.set(t)}),J(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ut({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(i,n){i&2&&Kt("p-button-icon",!n.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,"ptButtonIcon"],pButtonIconPT:[1,"pButtonIconPT"],pButtonUnstyled:[1,"pButtonUnstyled"]},features:[D([Ft,{provide:gn,useExisting:e},{provide:F,useExisting:e}]),N([h]),T]})}return e})(),ps=(()=>{class e extends B{$pcButtonDirective=g(pn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});_componentStyle=g(Ft);ptButtonDirective=E();pButtonPT=E();pButtonUnstyled=E();hostName="";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}constructor(){super(),J(()=>{let t=this.ptButtonDirective()||this.pButtonPT();t&&this.directivePT.set(t)}),J(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),J(()=>{let t=this.$unstyled();this.initialized&&t&&this.setStyleClass()})}text=!1;plain=!1;raised=!1;size;outlined=!1;rounded=!1;iconPos="left";loadingIcon;fluid=E(void 0,{transform:x});iconSignal=le(bn);labelSignal=le(hn);isIconOnly=At(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(vt);pcFluid=g(he,{optional:!0,host:!0,skipSelf:!0});isTextButton=At(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}get icon(){return this._icon}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&Nt(this.htmlElement,this.getStyleClass().join(" ")),W(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let t=[vt.button,vt.component];return this.icon&&!this.label&&mt(this.htmlElement.textContent)&&t.push(vt.iconOnly),this.loading&&(t.push(vt.disabled,vt.loading),!this.icon&&this.label&&t.push(vt.labelOnly),this.icon&&!this.label&&!mt(this.htmlElement.textContent)&&t.push(vt.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),this.$unstyled()?[]:t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],i=this.htmlElement.classList.value.split(" ").find(n=>t.some(o=>n===`p-button-${o}`));i&&this.htmlElement.classList.remove(i)}createLabel(){if(!Q(this.htmlElement,'[data-pc-section="buttonlabel"]')&&this.label){let i=bt("span",{class:this.cx("label"),"p-bind":this.ptm("buttonlabel"),"aria-hidden":this.icon&&!this.label?"true":null});i.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(i)}}createIcon(){if(!Q(this.htmlElement,'[data-pc-section="buttonicon"]')&&(this.icon||this.loading)){let i=this.label&&!this.$unstyled()?"p-button-icon-"+this.iconPos:null,n=!this.$unstyled()&&this.getIconClass(),o=bt("span",{class:this.cn(this.cx("icon"),i,n),"aria-hidden":"true","p-bind":this.ptm("buttonicon")});!this.loadingIcon&&this.loading&&(o.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(o,this.htmlElement.firstChild)}}updateLabel(){let t=Q(this.htmlElement,'[data-pc-section="buttonlabel"]');if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=Q(this.htmlElement,'[data-pc-section="buttonicon"]'),i=Q(this.htmlElement,'[data-pc-section="buttonlabel"]');this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t&&!this.$unstyled()?this.iconPos?t.className="p-button-icon "+(i?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}onDestroy(){this.initialized=!1}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ut({type:e,selectors:[["","pButton",""]],contentQueries:function(i,n,o){i&1&&(re(o,n.iconSignal,bn,5),re(o,n.labelSignal,hn,5)),i&2&&Le(2)},hostVars:4,hostBindings:function(i,n){i&2&&Kt("p-button-icon-only",!n.$unstyled()&&n.isIconOnly())("p-button-text",!n.$unstyled()&&n.isTextButton())},inputs:{ptButtonDirective:[1,"ptButtonDirective"],pButtonPT:[1,"pButtonPT"],pButtonUnstyled:[1,"pButtonUnstyled"],hostName:"hostName",text:[2,"text","text",x],plain:[2,"plain","plain",x],raised:[2,"raised","raised",x],size:"size",outlined:[2,"outlined","outlined",x],rounded:[2,"rounded","rounded",x],iconPos:"iconPos",loadingIcon:"loadingIcon",fluid:[1,"fluid"],label:"label",icon:"icon",loading:"loading",buttonProps:"buttonProps",severity:"severity"},features:[D([Ft,{provide:pn,useExisting:e},{provide:F,useExisting:e}]),N([h]),T]})}return e})(),be=(()=>{class e extends B{hostName="";$pcButton=g(un,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});_componentStyle=g(Ft);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=E(void 0,{transform:x});onClick=new G;onFocus=new G;onBlur=new G;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=g(he,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-button"]],contentQueries:function(i,n,o){if(i&1&&(y(o,Wn,5),y(o,Xn,5),y(o,Yn,5),y(o,ct,4)),i&2){let r;_(r=v())&&(n.contentTemplate=r.first),_(r=v())&&(n.loadingIconTemplate=r.first),_(r=v())&&(n.iconTemplate=r.first),_(r=v())&&(n.templates=r)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",x],raised:[2,"raised","raised",x],rounded:[2,"rounded","rounded",x],text:[2,"text","text",x],plain:[2,"plain","plain",x],outlined:[2,"outlined","outlined",x],link:[2,"link","link",x],tabindex:[2,"tabindex","tabindex",tt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",x],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",x],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[D([Ft,{provide:un,useExisting:e},{provide:F,useExisting:e}]),N([h]),T],ngContentSelectors:Jn,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(i,n){i&1&&(ot(),p(0,"button",0),q("click",function(r){return n.onClick.emit(r)})("focus",function(r){return n.onFocus.emit(r)})("blur",function(r){return n.onBlur.emit(r)}),Z(1),c(2,ti,1,0,"ng-container",1)(3,ai,3,6,"ng-container",2)(4,ci,3,6,"ng-container",2)(5,ui,2,6,"span",3)(6,pi,1,4,"p-badge",4),m()),i&2&&(u(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),a("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus))("pBind",n.ptm("root")),f("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex))("data-p",n.dataP)("data-p-disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("data-p-severity",n.severity||(n.buttonProps==null?null:n.buttonProps.severity)),d(2),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),d(),a("ngIf",n.loading||(n.buttonProps==null?null:n.buttonProps.loading)),d(),a("ngIf",!(n.loading||n.buttonProps!=null&&n.buttonProps.loading)),d(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.label||(n.buttonProps==null?null:n.buttonProps.label))),d(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.badge||(n.buttonProps==null?null:n.buttonProps.badge))))},dependencies:[z,it,lt,Bt,Yt,Ye,dn,Rt,zt,C,h],encapsulation:2,changeDetection:0})}return e})(),Tt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[z,be,C,C]})}return e})();var _n=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var hi=["*"];function bi(e,s){if(e&1&&(p(0,"span",3),K(1),m()),e&2){let t=l();u(t.cx("label")),a("pBind",t.ptm("label")),f("data-p",t.dataP),d(),st(t.label)}}function fi(e,s){if(e&1&&w(0,"span",5),e&2){let t=l(2);u(t.icon),a("pBind",t.ptm("icon"))("ngClass",t.cx("icon")),f("data-p",t.dataP)}}function _i(e,s){if(e&1&&c(0,fi,1,5,"span",4),e&2){let t=l(),i=Mt(5);a("ngIf",t.icon)("ngIfElse",i)}}function vi(e,s){if(e&1){let t=et();p(0,"img",7),q("error",function(n){k(t);let o=l(2);return M(o.imageError(n))}),m()}if(e&2){let t=l(2);a("pBind",t.ptm("image"))("src",t.image,Ut),f("aria-label",t.ariaLabel)("data-p",t.dataP)}}function yi(e,s){if(e&1&&c(0,vi,1,4,"img",6),e&2){let t=l();a("ngIf",t.image)}}var Ii={root:({instance:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},vn=(()=>{class e extends U{name="avatar";style=_n;classes=Ii;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var yn=new V("AVATAR_INSTANCE"),fe=(()=>{class e extends B{$pcAvatar=g(yn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new G;_componentStyle=g(vn);imageError(t){this.onImageError.emit(t)}get dataP(){return this.cn({[this.shape]:this.shape,[this.size]:this.size})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(i,n){i&2&&(f("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("data-p",n.dataP),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[D([vn,{provide:yn,useExisting:e},{provide:F,useExisting:e}]),N([h]),T],ngContentSelectors:hi,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(i,n){if(i&1&&(ot(),Z(0),c(1,bi,2,5,"span",2)(2,_i,1,2,"ng-template",null,0,rt)(4,yi,1,1,"ng-template",null,1,rt)),i&2){let o=Mt(3);d(),a("ngIf",n.label)("ngIfElse",o)}},dependencies:[z,Gt,it,C,h],encapsulation:2,changeDetection:0})}return e})(),$t=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[fe,C,C]})}return e})();var In=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`;var Ti=["start"],Ci=["end"],wi=["center"],Si=["*"];function ki(e,s){e&1&&L(0)}function Mi(e,s){if(e&1&&(p(0,"div",1),c(1,ki,1,0,"ng-container",2),m()),e&2){let t=l();u(t.cx("start")),a("pBind",t.ptm("start")),d(),a("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function Ei(e,s){e&1&&L(0)}function Bi(e,s){if(e&1&&(p(0,"div",1),c(1,Ei,1,0,"ng-container",2),m()),e&2){let t=l();u(t.cx("center")),a("pBind",t.ptm("center")),d(),a("ngTemplateOutlet",t.centerTemplate||t._centerTemplate)}}function Pi(e,s){e&1&&L(0)}function Li(e,s){if(e&1&&(p(0,"div",1),c(1,Pi,1,0,"ng-container",2),m()),e&2){let t=l();u(t.cx("end")),a("pBind",t.ptm("end")),d(),a("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}var Di={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},xn=(()=>{class e extends U{name="toolbar";style=In;classes=Di;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var Tn=new V("TOOLBAR_INSTANCE"),_e=(()=>{class e extends B{$pcToolbar=g(Tn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;ariaLabelledBy;_componentStyle=g(xn);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"start":case"left":this._startTemplate=t.template;break;case"end":case"right":this._endTemplate=t.template;break;case"center":this._centerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-toolbar"]],contentQueries:function(i,n,o){if(i&1&&(y(o,Ti,4),y(o,Ci,4),y(o,wi,4),y(o,ct,4)),i&2){let r;_(r=v())&&(n.startTemplate=r.first),_(r=v())&&(n.endTemplate=r.first),_(r=v())&&(n.centerTemplate=r.first),_(r=v())&&(n.templates=r)}},hostAttrs:["role","toolbar"],hostVars:3,hostBindings:function(i,n){i&2&&(f("aria-labelledby",n.ariaLabelledBy),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[D([xn,{provide:Tn,useExisting:e},{provide:F,useExisting:e}]),N([h]),T],ngContentSelectors:Si,decls:4,vars:3,consts:[[3,"class","pBind",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(ot(),Z(0),c(1,Mi,2,4,"div",0)(2,Bi,2,4,"div",0)(3,Li,2,4,"div",0)),i&2&&(d(),a("ngIf",n.startTemplate||n._startTemplate),d(),a("ngIf",n.centerTemplate||n._centerTemplate),d(),a("ngIf",n.endTemplate||n._endTemplate))},dependencies:[z,it,lt,C,X,h],encapsulation:2,changeDetection:0})}return e})(),ve=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[_e,C,X,C,X]})}return e})();var Cn=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var Oi={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},wn=(()=>{class e extends U{name="tooltip";style=Cn;classes=Oi;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var Sn=new V("TOOLTIP_INSTANCE"),kn=(()=>{class e extends B{zone;viewContainer;$pcTooltip=g(Sn,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=E(void 0);$appendTo=At(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:gt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=g(wn);interactionInProgress=!1;ptTooltip=E();pTooltipPT=E();pTooltipUnstyled=E();constructor(t,i){super(),this.zone=t,this.viewContainer=i,J(()=>{let n=this.ptTooltip()||this.pTooltipPT();n&&this.directivePT.set(n)}),J(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){W(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}onChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=Ot(Ot({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Pt(t.relatedTarget,"p-tooltip")||Pt(t.relatedTarget,"p-tooltip-text")||Pt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=bt("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let t=bt("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(t),this.tooltipText=bt("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?ue(this.container,this.el.nativeElement):ue(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),ze(this.container,250),this.getOption("tooltipZIndex")==="auto"?It.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&It.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let i=this.viewContainer.createEmbeddedView(t);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[o,r]of n.entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),i=t.left+Ae(),n=t.top+Ne();return{left:i,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Q(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,i=dt(t),n=(ft(t)-ft(this.container))/2;this.alignTooltip(i,n);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),i=dt(this.container),n=(ft(this.el.nativeElement)-ft(this.container))/2;this.alignTooltip(-i,n),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),i=this.getHostOffset(),n=dt(this.container),o=(dt(this.el.nativeElement)-dt(this.container))/2,r=ft(this.container);this.alignTooltip(o,-r);let b=i.left-this.getHostOffset().left+n/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=b+"px"}getArrowElement(){return Q(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),i=dt(this.container),n=this.getHostOffset(),o=(dt(this.el.nativeElement)-dt(this.container))/2,r=ft(this.el.nativeElement);this.alignTooltip(o,r);let b=n.left-this.getHostOffset().left+i/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=b+"px"}alignTooltip(t,i){let n=this.getHostOffset(),o=n.left+t,r=n.top+i;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=Ot(Ot({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Pt(t,"p-inputwrapper")?Q(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+t,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let t=this.container.getBoundingClientRect(),i=t.top,n=t.left,o=dt(this.container),r=ft(this.container),b=Ve();return n+o>b.width||n<0||i<0||i+r>b.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new qe(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):$e(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&It.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||e)(St(jt),St(Ee))};static \u0275dir=ut({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",x],showDelay:[2,"showDelay","showDelay",tt],hideDelay:[2,"hideDelay","hideDelay",tt],life:[2,"life","life",tt],positionTop:[2,"positionTop","positionTop",tt],positionLeft:[2,"positionLeft","positionLeft",tt],autoHide:[2,"autoHide","autoHide",x],fitContent:[2,"fitContent","fitContent",x],hideOnEscape:[2,"hideOnEscape","hideOnEscape",x],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[D([wn,{provide:Sn,useExisting:e},{provide:F,useExisting:e}]),T]})}return e})(),ye=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[X,X]})}return e})();var Mn=`
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        line-height: 1;
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`;var Bn=e=>({processedItem:e}),Ai=()=>({exact:!1}),Ni=e=>({$implicit:e});function zi(e,s){if(e&1&&(p(0,"li",5),K(1),m()),e&2){let t=l();Et(t.getItemProp(t.submenu,"style")),u(t.cn(t.cx("submenuLabel"),t.getItemProp(t.submenu,"class"))),a("pBind",t.ptm("submenuLabel")),d(),ae(" ",t.getItemLabel(t.submenu)," ")}}function Ri(e,s){if(e&1&&w(0,"li",8),e&2){let t=l().$implicit,i=l();Et(i.getItemProp(t,"style")),u(i.cn(i.cx("separator"),i.getItemProp(t,"class"))),a("pBind",i.ptm("separator")),f("id",i.getItemId(t))}}function Hi(e,s){if(e&1&&w(0,"span",19),e&2){let t=l(4),i=t.$implicit,n=t.index,o=l();u(o.cn(o.cx("itemIcon"),o.getItemProp(i,"icon"),o.getItemProp(i,"iconClass"))),a("ngStyle",o.getItemProp(i,"iconStyle"))("pBind",o.getPTOptions(i,n,"itemIcon")),f("tabindex",-1)}}function $i(e,s){if(e&1&&(p(0,"span",19),K(1),m()),e&2){let t=l(4),i=t.$implicit,n=t.index,o=l();u(o.cn(o.cx("itemLabel"),o.getItemProp(i,"labelClass"))),a("ngStyle",o.getItemProp(i,"labelStyle"))("pBind",o.getPTOptions(i,n,"itemLabel")),d(),ae(" ",o.getItemLabel(i)," ")}}function ji(e,s){if(e&1&&w(0,"span",20),e&2){let t=l(4),i=t.$implicit,n=t.index,o=l();u(o.cn(o.cx("itemLabel"),o.getItemProp(i,"labelClass"))),a("ngStyle",o.getItemProp(i,"labelStyle"))("innerHTML",o.getItemLabel(i),ee)("pBind",o.getPTOptions(i,n,"itemLabel"))}}function Qi(e,s){if(e&1&&w(0,"p-badge",21),e&2){let t=l(4).$implicit,i=l();u(i.getItemProp(t,"badgeStyleClass")),a("value",i.getItemProp(t,"badge"))("unstyled",i.unstyled())}}function Ui(e,s){if(e&1&&(P(),w(0,"svg",25)),e&2){let t=l(6),i=t.$implicit,n=t.index,o=l();u(o.cx("submenuIcon")),a("pBind",o.getPTOptions(i,n,"submenuIcon")),f("aria-hidden",!0)}}function qi(e,s){if(e&1&&(P(),w(0,"svg",27)),e&2){let t=l(7),i=t.$implicit,n=t.index,o=l();u(o.cx("submenuIcon")),a("pBind",o.getPTOptions(i,n,"submenuIcon")),f("aria-hidden",!0)}}function Ki(e,s){if(e&1&&c(0,qi,1,4,"svg",26),e&2){let t=l(7);a("ngIf",t.orientation==="vertical")}}function Gi(e,s){if(e&1&&(R(0),Be(1,Ui,1,4,":svg:svg",23)(2,Ki,1,1,":svg:svg",24),H()),e&2){let t=l(6);d(),Pe(t.orientation==="horizontal"||t.mobileActive?1:2)}}function Zi(e,s){}function Wi(e,s){e&1&&c(0,Zi,0,0,"ng-template",28),e&2&&ne("aria-hidden",!0)}function Xi(e,s){if(e&1&&(R(0),c(1,Gi,3,1,"ng-container",11)(2,Wi,1,1,null,22),H()),e&2){let t=l(5);d(),a("ngIf",!t.megaMenu.submenuIconTemplate&&!t.megaMenu._submenuIconTemplate),d(),a("ngTemplateOutlet",t.megaMenu.submenuIconTemplate||t.megaMenu._submenuIconTemplate)}}function Yi(e,s){if(e&1&&(p(0,"a",15),c(1,Hi,1,5,"span",16)(2,$i,2,5,"span",17)(3,ji,1,5,"ng-template",null,1,rt)(5,Qi,1,4,"p-badge",18)(6,Xi,3,2,"ng-container",11),m()),e&2){let t=Mt(4),i=l(3),n=i.$implicit,o=i.index,r=l();u(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),a("target",r.getItemProp(n,"target"))("ngStyle",r.getItemProp(n,"linkStyle"))("pBind",r.getPTOptions(n,o,"itemLink")),f("href",r.getItemProp(n,"url"),Ut)("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("tabindex",-1),d(),a("ngIf",r.getItemProp(n,"icon")),d(),a("ngIf",r.getItemProp(n,"escape"))("ngIfElse",t),d(3),a("ngIf",r.getItemProp(n,"badge")),d(),a("ngIf",r.isItemGroup(n))}}function Ji(e,s){if(e&1&&w(0,"span",19),e&2){let t=l(4),i=t.$implicit,n=t.index,o=l();u(o.cn(o.cx("itemIcon"),o.getItemProp(i,"icon"),o.getItemProp(i,"iconClass"))),a("ngStyle",o.getItemProp(i,"iconStyle"))("pBind",o.getPTOptions(i,n,"itemIcon")),f("tabindex",-1)}}function to(e,s){if(e&1&&(p(0,"span",19),K(1),m()),e&2){let t=l(4),i=t.$implicit,n=t.index,o=l();u(o.cn(o.cx("itemLabel"),o.getItemProp(i,"labelClass"))),a("ngStyle",o.getItemProp(i,"labelStyle"))("pBind",o.getPTOptions(i,n,"itemLabel")),d(),st(o.getItemLabel(i))}}function eo(e,s){if(e&1&&w(0,"span",20),e&2){let t=l(4),i=t.$implicit,n=t.index,o=l();u(o.cn(o.cx("itemLabel"),o.getItemProp(i,"labelClass"))),a("ngStyle",o.getItemProp(i,"labelStyle"))("innerHTML",o.getItemLabel(i),ee)("pBind",o.getPTOptions(i,n,"itemLabel"))}}function no(e,s){if(e&1&&w(0,"p-badge",31),e&2){let t=l(4).$implicit,i=l();a("styleClass",i.getItemProp(t,"badgeStyleClass"))("value",i.getItemProp(t,"badge"))("unstyled",i.unstyled())}}function io(e,s){if(e&1&&(P(),w(0,"svg",25)),e&2){let t=l(6),i=t.$implicit,n=t.index,o=l();u(o.cx("submenuIcon")),a("pBind",o.getPTOptions(i,n,"submenuIcon")),f("aria-hidden",!0)}}function oo(e,s){if(e&1&&(P(),w(0,"svg",27)),e&2){let t=l(6),i=t.$implicit,n=t.index,o=l();u(o.cx("submenuIcon")),a("pBind",o.getPTOptions(i,n,"submenuIcon")),f("aria-hidden",!0)}}function ro(e,s){if(e&1&&(R(0),c(1,io,1,4,"svg",32)(2,oo,1,4,"svg",26),H()),e&2){let t=l(6);d(),a("ngIf",t.orientation==="horizontal"),d(),a("ngIf",t.orientation==="vertical")}}function ao(e,s){}function so(e,s){e&1&&c(0,ao,0,0,"ng-template",28),e&2&&ne("aria-hidden",!0)}function lo(e,s){if(e&1&&(R(0),c(1,ro,3,2,"ng-container",11)(2,so,1,1,null,22),H()),e&2){let t=l(5);d(),a("ngIf",!t.megaMenu.submenuIconTemplate&&!t.megaMenu._submenuIconTemplate),d(),a("ngTemplateOutlet",t.megaMenu.submenuIconTemplate||t.megaMenu._submenuIconTemplate)}}function co(e,s){if(e&1&&(p(0,"a",29),c(1,Ji,1,5,"span",16)(2,to,2,5,"span",17)(3,eo,1,5,"ng-template",null,2,rt)(5,no,1,3,"p-badge",30)(6,lo,3,2,"ng-container",11),m()),e&2){let t=Mt(4),i=l(3),n=i.$implicit,o=i.index,r=l();u(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),a("routerLink",r.getItemProp(n,"routerLink"))("queryParams",r.getItemProp(n,"queryParams"))("routerLinkActive","p-megamenu-item-link-active")("routerLinkActiveOptions",r.getItemProp(n,"routerLinkActiveOptions")||De(23,Ai))("target",r.getItemProp(n,"target"))("ngStyle",r.getItemProp(n,"linkStyle"))("fragment",r.getItemProp(n,"fragment"))("queryParamsHandling",r.getItemProp(n,"queryParamsHandling"))("preserveFragment",r.getItemProp(n,"preserveFragment"))("skipLocationChange",r.getItemProp(n,"skipLocationChange"))("replaceUrl",r.getItemProp(n,"replaceUrl"))("state",r.getItemProp(n,"state"))("pBind",r.getPTOptions(n,o,"itemLink")),f("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("tabindex",-1),d(),a("ngIf",r.getItemProp(n,"icon")),d(),a("ngIf",r.getItemProp(n,"escape"))("ngIfElse",t),d(3),a("ngIf",r.getItemProp(n,"badge")),d(),a("ngIf",r.isItemGroup(n))}}function uo(e,s){if(e&1&&(R(0),c(1,Yi,7,14,"a",13)(2,co,7,24,"a",14),H()),e&2){let t=l(2).$implicit,i=l();d(),a("ngIf",!i.getItemProp(t,"routerLink")),d(),a("ngIf",i.getItemProp(t,"routerLink"))}}function po(e,s){}function mo(e,s){e&1&&c(0,po,0,0,"ng-template")}function go(e,s){if(e&1&&(R(0),c(1,mo,1,0,null,33),H()),e&2){let t=l(2).$implicit,i=l();d(),a("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",nt(2,Ni,t.item))}}function ho(e,s){if(e&1){let t=et();p(0,"ul",37),q("itemClick",function(n){k(t);let o=l(5);return M(o.itemClick.emit(n))})("itemMouseEnter",function(n){k(t);let o=l(5);return M(o.onItemMouseEnter(n))}),m()}if(e&2){let t=s.$implicit,i=l(5);a("id",i.getSubListId(t))("submenu",t)("items",t.items)("itemTemplate",i.itemTemplate)("mobileActive",i.mobileActive)("menuId",i.menuId)("focusedItemId",i.focusedItemId)("level",i.level+1)("root",!1)("pt",i.pt())("unstyled",i.unstyled())}}function bo(e,s){if(e&1&&(p(0,"div",34),c(1,ho,1,11,"ul",36),m()),e&2){let t=s.$implicit,i=l(3).$implicit,n=l();u(n.cx("column",nt(4,Bn,i))),a("pBind",n.ptm("column")),d(),a("ngForOf",t)}}function fo(e,s){if(e&1&&(p(0,"div",34)(1,"div",34),c(2,bo,2,6,"div",35),m()()),e&2){let t=l(2).$implicit,i=l();u(i.cx("overlay")),a("pBind",i.ptm("overlay")),d(),u(i.cx("grid")),a("pBind",i.ptm("grid")),d(),a("ngForOf",t.items)}}function _o(e,s){if(e&1){let t=et();p(0,"li",9,0)(2,"div",10),q("click",function(n){k(t);let o=l().$implicit,r=l();return M(r.onItemClick(n,o))})("mouseenter",function(n){k(t);let o=l().$implicit,r=l();return M(r.onItemMouseEnter({$event:n,processedItem:o}))}),c(3,uo,3,2,"ng-container",11)(4,go,2,4,"ng-container",11),m(),c(5,fo,3,7,"div",12),m()}if(e&2){let t=l(),i=t.$implicit,n=t.index,o=l();u(o.cn(o.cx("item",nt(23,Bn,i)),o.getItemProp(i,"styleClass"))),a("ngStyle",o.getItemProp(i,"style"))("tooltipOptions",o.getItemProp(i,"tooltipOptions"))("pBind",o.getPTOptions(i,n,"item"))("pTooltipUnstyled",o.unstyled()),f("id",o.getItemId(i))("data-p-active",o.isItemActive(i))("data-p-focused",o.isItemFocused(i))("data-p-disabled",o.isItemDisabled(i))("aria-label",o.getItemLabel(i))("aria-disabled",o.isItemDisabled(i)||void 0)("aria-haspopup",o.isItemGroup(i)&&!o.getItemProp(i,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(i)?o.isItemActive(i):void 0)("aria-level",o.level+1)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(n)),d(2),u(o.cx("itemContent")),a("pBind",o.getPTOptions(i,n,"itemContent")),d(),a("ngIf",!o.itemTemplate),d(),a("ngIf",o.itemTemplate),d(),a("ngIf",o.isItemVisible(i)&&o.isItemGroup(i))}}function vo(e,s){if(e&1&&c(0,Ri,1,6,"li",6)(1,_o,6,25,"li",7),e&2){let t=s.$implicit,i=l();a("ngIf",i.isItemVisible(t)&&i.getItemProp(t,"separator")),d(),a("ngIf",i.isItemVisible(t)&&!i.getItemProp(t,"separator"))}}var yo=["start"],Io=["end"],xo=["menuicon"],To=["submenuicon"],Co=["item"],wo=["button"],So=["buttonicon"],ko=["menubutton"],Mo=["rootmenu"];function Eo(e,s){e&1&&L(0)}function Bo(e,s){if(e&1&&(p(0,"div",6),c(1,Eo,1,0,"ng-container",4),m()),e&2){let t=l();u(t.cx("start")),a("pBind",t.ptm("start")),d(),a("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function Po(e,s){if(e&1&&(P(),w(0,"svg",10)),e&2){let t=l(3);a("pBind",t.ptm("buttonIcon"))}}function Lo(e,s){}function Do(e,s){e&1&&c(0,Lo,0,0,"ng-template")}function Fo(e,s){if(e&1){let t=et();p(0,"a",8,1),q("click",function(n){k(t);let o=l(2);return M(o.menuButtonClick(n))})("keydown",function(n){k(t);let o=l(2);return M(o.menuButtonKeydown(n))}),c(2,Po,1,1,"svg",9)(3,Do,1,0,null,4),m()}if(e&2){let t=l(2);u(t.cx("button")),a("pBind",t.ptm("button")),f("aria-haspopup",!!(t.model.length&&t.model.length>0))("aria-expanded",t.mobileActive)("aria-controls",t.id)("aria-label",t.config.translation.aria.navigation),d(2),a("ngIf",!t.buttonIconTemplate&&!t._buttonIconTemplate),d(),a("ngTemplateOutlet",t.buttonIconTemplate||t._buttonIconTemplate)}}function Oo(e,s){if(e&1&&(R(0),c(1,Fo,4,9,"a",7),H()),e&2){let t=l();d(),a("ngIf",t.model&&t.model.length>0)}}function Vo(e,s){e&1&&L(0)}function Ao(e,s){e&1&&L(0)}function No(e,s){if(e&1&&(p(0,"div",6),c(1,Ao,1,0,"ng-container",4),m()),e&2){let t=l();u(t.cx("end")),a("pBind",t.ptm("end")),d(),a("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}var zo={rootList:({instance:e})=>({"max-height":e.scrollHeight,overflow:"auto"})},Ro={root:({instance:e})=>["p-megamenu p-component",{"p-megamenu-mobile":e.queryMatches(),"p-megamenu-mobile-active":e.mobileActive,"p-megamenu-horizontal":e.orientation==="horizontal","p-megamenu-vertical":e.orientation==="vertical"}],start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:({instance:e,processedItem:s})=>["p-megamenu-submenu-label",{"p-disabled":e.isItemDisabled(s)}],item:({instance:e,processedItem:s})=>["p-megamenu-item",e.getItemProp(s,"styleClass"),e.getItemProp(s,"class"),{"p-megamenu-item-active":e.isItemActive(s),"p-focus":e.isItemFocused(s),"p-disabled":e.isItemDisabled(s)}],itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:({instance:e,processedItem:s})=>{let t=e.isItemGroup(s)?s.items.length:0,i;if(e.megaMenu.queryMatches())i="p-megamenu-col-12";else switch(t){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},Ie=(()=>{class e extends U{name="megamenu";style=Mn;classes=Ro;inlineStyles=zo;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var Pn=new V("MEGAMENU_INSTANCE"),En=new V("MEGAMENU_SUB_INSTANCE"),Ho=(()=>{class e extends B{bindDirectiveInstance=g(h,{self:!0});$pcMegaMenu=g(Pn,{optional:!0,skipSelf:!0})??void 0;$pcMegaMenuSub=g(En,{optional:!0,skipSelf:!0})??void 0;id;items;itemTemplate;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;disabled=!1;orientation;activeItem;submenu;queryMatches=!1;mobileActive=!1;scrollHeight;tabindex=0;root=!1;itemClick=new G;itemMouseEnter=new G;menuFocus=new G;menuBlur=new G;menuKeydown=new G;menuMouseDown=new G;megaMenu=g(we(()=>Ln));_componentStyle=g(Ie);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(this.root?"rootList":"submenu"))}onItemClick(t,i){this.getItemProp(i,"command",{originalEvent:t,item:i.item}),this.itemClick.emit({originalEvent:t,processedItem:i,isFocus:!0})}getItemProp(t,i,n=null){return t&&t.item?ge(t.item[i],n):void 0}getItemId(t){return t.item&&t.item?.id?t.item.id:`${this.menuId}_${t.key}`}getSubListId(t){return`${this.getItemId(t)}_list`}getItemLabel(t){return this.getItemProp(t,"label")}isSubmenuVisible(t){return this.submenu&&!this.root?this.isItemVisible(t):!0}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemActive(t){return $(this.activeItem)?this.activeItem.key===t.key:!1}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return $(t.items)}getAriaSetSize(){return this.items?.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-(this.items?.slice(0,t).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length||0)+1}onItemMouseEnter(t){let{event:i,processedItem:n}=t;this.itemMouseEnter.emit({originalEvent:i,processedItem:n})}getPTOptions(t,i,n){let o={context:{item:t.item,index:i,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}};return this.ptm(n,o)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-megaMenuSub"],["p-megamenu-sub"],["ul","pMegaMenuSub",""]],hostVars:12,hostBindings:function(i,n){i&1&&q("keydown",function(r){return n.menuKeydown.emit(r)})("focus",function(r){return n.menuFocus.emit(r)})("blur",function(r){return n.menuBlur.emit(r)})("mousedown",function(r){return n.menuMouseDown.emit(r)}),i&2&&(Vt("tabIndex",n.tabindex),f("role",n.root?"menubar":"menu")("id",n.id)("aria-orientation",n.orientation)("aria-activedescendant",n.focusedItemId)("data-pc-section",n.root?"rootlist":"submenu"),Et(n.sx("rootList")),u(n.root?n.cx("rootList"):n.cx("submenu")),qt("display",n.isSubmenuVisible(n.submenu)?null:"none"))},inputs:{id:"id",items:"items",itemTemplate:"itemTemplate",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",tt],focusedItemId:"focusedItemId",disabled:[2,"disabled","disabled",x],orientation:"orientation",activeItem:"activeItem",submenu:"submenu",queryMatches:[2,"queryMatches","queryMatches",x],mobileActive:[2,"mobileActive","mobileActive",x],scrollHeight:"scrollHeight",tabindex:[2,"tabindex","tabindex",tt],root:[2,"root","root",x]},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown",menuMouseDown:"menuMouseDown"},features:[D([{provide:En,useExisting:e},{provide:F,useExisting:e}]),N([h]),T],decls:2,vars:2,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","presentation",3,"class","style","pBind",4,"ngIf"],["ngFor","",3,"ngForOf"],["role","presentation",3,"pBind"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","class","tooltipOptions","pBind","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"ngStyle","tooltipOptions","pBind","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["pRipple","",3,"target","class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"target","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"class","value","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],[3,"value","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind"],["data-p-icon","angle-right",3,"class","pBind"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"pBind"],[3,"aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"styleClass","value","unstyled",4,"ngIf"],[3,"styleClass","value","unstyled"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[3,"class","pBind",4,"ngFor","ngForOf"],["pMegaMenuSub","",3,"id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","pt","unstyled","itemClick","itemMouseEnter",4,"ngFor","ngForOf"],["pMegaMenuSub","",3,"itemClick","itemMouseEnter","id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","pt","unstyled"]],template:function(i,n){i&1&&c(0,zi,2,6,"li",3)(1,vo,2,2,"ng-template",4),i&2&&(a("ngIf",n.submenu),d(),a("ngForOf",n.items))},dependencies:[e,z,Zt,it,lt,Bt,de,Fe,Oe,Yt,ye,kn,h,an,sn,Rt,zt,C],encapsulation:2})}return e})(),Ln=(()=>{class e extends B{bindDirectiveInstance=g(h,{self:!0});set model(t){this._model=t,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;orientation="horizontal";id;ariaLabel;ariaLabelledBy;breakpoint="960px";scrollHeight="20rem";disabled=!1;tabindex=0;startTemplate;endTemplate;menuIconTemplate;submenuIconTemplate;itemTemplate;buttonTemplate;buttonIconTemplate;templates;menubuttonViewChild;rootmenu;_startTemplate;_endTemplate;_menuIconTemplate;_submenuIconTemplate;_itemTemplate;_buttonTemplate;_buttonIconTemplate;outsideClickListener;resizeListener;dirty=!1;focused=!1;activeItem=wt(null);focusedItemInfo=wt({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=g(Ie);matchMediaListener;query;queryMatches=wt(!1);mobileActive=!1;get visibleItems(){let t=$(this.activeItem())?this.activeItem():null;return t?t.items.reduce((i,n)=>(n.forEach(o=>{o.items.forEach(r=>{i.push(r)})}),i),[]):this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let t=this.focusedItemInfo();return t?.item&&t.item?.id?t.item.id:$(t.key)?`${this.id}_${t.key}`:null}constructor(){super(),J(()=>{let t=this.activeItem();$(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.id=this.id||gt("pn_id_")}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"start":this._startTemplate=t.template;break;case"end":this._endTemplate=t.template;break;case"menuicon":this._menuIconTemplate=t.template;break;case"submenuicon":this._submenuIconTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"button":this._buttonTemplate=t.template;break;case"buttonicon":this._buttonIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}bindMatchMediaListener(){if(W(this.platformId)&&!this.matchMediaListener){let t=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches.set(t.matches),this.matchMediaListener=()=>{this.queryMatches.set(t.matches),this.mobileActive=!1,this.cd.markForCheck()},t.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(t,i=0,n={},o="",r){let b=[];return t&&t.forEach((at,yt)=>{let ht=(o!==""?o+"_":"")+(r!==void 0?r+"_":"")+yt,Ct={item:at,index:yt,level:i,key:ht,parent:n,parentKey:o,columnIndex:r!==void 0?r:n.columnIndex!==void 0?n.columnIndex:yt};Ct.items=i===0&&at.items&&at.items.length>0?at.items.map((Rn,Hn)=>this.createProcessedItems(Rn,i+1,Ct,ht,Hn)):this.createProcessedItems(at.items,i+1,Ct,ht),b.push(Ct)}),b}getItemProp(t,i){return t?ge(t[i]):void 0}onItemClick(t){this.dirty=!0;let{originalEvent:i,processedItem:n}=t,o=this.isProcessedItemGroup(n),r=mt(n.parent);if(this.isSelected(n)){let{index:at,key:yt,parentKey:ht,item:Ct}=n;this.activeItem.set(null),this.focusedItemInfo.set({index:at,key:yt,parentKey:ht,item:Ct}),this.dirty=!r,this.mobileActive||Dt(this.rootmenu?.el?.nativeElement,{preventScroll:!0})}else o?this.onItemChange(t):this.hide(i)}onItemMouseEnter(t){!this.mobileActive&&this.dirty&&this.onItemChange(t)}menuButtonClick(t){this.toggle(t)}menuButtonKeydown(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&this.menuButtonClick(t)}toggle(t){this.mobileActive?(this.mobileActive=!1,It.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,It.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),t.preventDefault()}show(){this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),Dt(this.rootmenu?.el.nativeElement)}scrollInView(t=-1){let i=t!==-1?`${this.id}_${t}`:this.focusedItemId,n;i===null&&this.queryMatches()?n=this.menubuttonViewChild?.nativeElement:n=Q(this.rootmenu?.el?.nativeElement,`li[id="${i}"]`),n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})}onItemChange(t){let{processedItem:i,isFocus:n}=t;if(mt(i))return;let{index:o,key:r,parentKey:b,items:at,item:yt}=i,ht=$(at);ht&&this.activeItem.set(i),this.focusedItemInfo.set({index:o,key:r,parentKey:b,item:yt}),ht&&(this.dirty=!0),n&&Dt(this.rootmenu?.el?.nativeElement)}hide(t,i){this.mobileActive&&(this.mobileActive=!1,setTimeout(()=>{Dt(this.menubuttonViewChild?.nativeElement),this.scrollInView()},100)),this.activeItem.set(null),this.focusedItemInfo.set({index:-1,key:"",parentKey:"",item:null}),i&&Dt(this.rootmenu?.el?.nativeElement),this.dirty=!1}onMenuMouseDown(t){this.dirty=!0}onMenuFocus(t){this.focused=!0;let i=t.relatedTarget;if((!i||!this.el.nativeElement.contains(i))&&this.focusedItemInfo().index===-1&&mt(this.activeItem())&&!this.dirty){let o=this.findFirstFocusedItemIndex(),r=this.findVisibleItem(o);this.focusedItemInfo.set({index:o,key:r.key,parentKey:r.parentKey,item:r.item})}}onMenuBlur(t){let i=t.relatedTarget;i&&this.el.nativeElement.contains(i)||setTimeout(()=>{let n=this.document.activeElement;n&&this.el.nativeElement.contains(n)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1)})}onKeyDown(t){let i=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&Qe(t.key)&&this.searchItems(t,t.key);break}}findFirstFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t}findFirstItemIndex(){return this.visibleItems.findIndex(t=>this.isValidItem(t))}findSelectedItemIndex(){return this.visibleItems.findIndex(t=>this.isValidSelectedItem(t))}isProcessedItemGroup(t){return t&&$(t.items)}isSelected(t){return $(this.activeItem())?this.activeItem().key===t.key:!1}isValidSelectedItem(t){return this.isValidItem(t)&&this.isSelected(t)}isValidItem(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemSeparator(t){return this.getItemProp(t,"separator")}isItemMatched(t){return this.isValidItem(t)&&this.getProccessedItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(t){return t&&$(t.items)}searchItems(t,i){this.searchValue=(this.searchValue||"")+i;let n=-1,o=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(r=>this.isItemMatched(r)),n!==-1&&(o=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemInfo(t,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}getProccessedItemLabel(t){return t?this.getItemLabel(t.item):void 0}getItemLabel(t){return this.getItemProp(t,"label")}changeFocusedItemInfo(t,i){let n=this.findVisibleItem(i);if($(n)){let{key:o,parentKey:r,item:b}=n;this.focusedItemInfo.set({index:i,key:o||"",parentKey:r,item:b})}this.scrollInView()}onArrowDownKey(t){if(this.orientation==="horizontal")if($(this.activeItem())&&this.activeItem().key===this.focusedItemInfo().key){let{key:n,item:o}=this.activeItem();this.focusedItemInfo.set({index:-1,key:"",parentKey:n,item:o})}else{let n=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(n)){let{parentKey:r,key:b,item:at}=n;this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo.set({index:-1,key:b,parentKey:r,item:at}),this.searchValue=""}}let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(t,i),t.preventDefault()}onArrowRightKey(t){let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){if(this.orientation==="vertical")if($(this.activeItem())&&this.activeItem().key===i.key)this.focusedItemInfo.set({index:-1,key:"",parentKey:this.activeItem().key,item:i.item});else{let r=this.findVisibleItem(this.focusedItemInfo().index);this.isProccessedItemGroup(r)&&(this.onItemChange({originalEvent:t,processedItem:r}),this.focusedItemInfo.set({index:-1,key:r.key,parentKey:r.parentKey,item:r.item}),this.searchValue="")}let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(t,o)}else{let o=i.columnIndex+1,r=this.visibleItems.findIndex(b=>b.columnIndex===o);r!==-1&&this.changeFocusedItemInfo(t,r)}t.preventDefault()}onArrowUpKey(t){if(t.altKey&&this.orientation==="horizontal"){if(this.focusedItemInfo().index!==-1){let i=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(i)&&$(this.activeItem)&&(this.focusedItemInfo().index===0?(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:i.item}),this.activeItem.set(null)):this.changeFocusedItemInfo(t,this.findFirstItemIndex()))}t.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(t,i),t.preventDefault()}}onArrowLeftKey(t){let i=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(i)){if(this.orientation==="horizontal"){let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(t,o)}}else{this.orientation==="vertical"&&$(this.activeItem())&&i.columnIndex===0&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:i.item}),this.activeItem.set(null));let o=i.columnIndex-1,r=this.visibleItems.findIndex(b=>b.columnIndex===o);r!==-1&&this.changeFocusedItemInfo(t,r)}t.preventDefault()}onHomeKey(t){this.changeFocusedItemInfo(t,this.findFirstItemIndex()),t.preventDefault()}onEndKey(t){this.changeFocusedItemInfo(t,this.findLastItemIndex()),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}onEscapeKey(t){$(this.activeItem())&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,item:this.activeItem().item}),this.activeItem.set(null)),t.preventDefault()}onTabKey(t){if(this.focusedItemInfo().index!==-1){let i=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:t,processedItem:i})}this.hide()}onEnterKey(t){if(this.focusedItemInfo().index!==-1){let i=Q(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=i&&(Q(i,'[data-pc-section="itemlink"]')||Q(i,"a,button"));n?n.click():i&&i.click();let o=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(o)&&this.changeFocusedItemInfo(t,this.findFirstFocusedItemIndex())}t.preventDefault()}findVisibleItem(t){return $(this.visibleItems)?this.visibleItems[t]:null}findLastFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t}findLastItemIndex(){return me(this.visibleItems,t=>this.isValidItem(t))}findPrevItemIndex(t){let i=t>0?me(this.visibleItems.slice(0,t),n=>this.isValidItem(n)):-1;return i>-1?i:t}findNextItemIndex(t){let i=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(n=>this.isValidItem(n)):-1;return i>-1?i+t+1:t}bindResizeListener(){this.resizeListener||(this.resizeListener=t=>{He()||this.hide(t,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))}bindOutsideClickListener(){W(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",t=>{this.el?.nativeElement!==t.target&&!this.el?.nativeElement.contains(t.target)&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}onDestroy(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["p-megaMenu"],["p-megamenu"],["p-mega-menu"]],contentQueries:function(i,n,o){if(i&1&&(y(o,yo,4),y(o,Io,4),y(o,xo,4),y(o,To,4),y(o,Co,4),y(o,wo,4),y(o,So,4),y(o,ct,4)),i&2){let r;_(r=v())&&(n.startTemplate=r.first),_(r=v())&&(n.endTemplate=r.first),_(r=v())&&(n.menuIconTemplate=r.first),_(r=v())&&(n.submenuIconTemplate=r.first),_(r=v())&&(n.itemTemplate=r.first),_(r=v())&&(n.buttonTemplate=r.first),_(r=v())&&(n.buttonIconTemplate=r.first),_(r=v())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(kt(ko,5),kt(Mo,5)),i&2){let o;_(o=v())&&(n.menubuttonViewChild=o.first),_(o=v())&&(n.rootmenu=o.first)}},hostVars:3,hostBindings:function(i,n){i&2&&(Vt("id",n.id),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{model:"model",styleClass:"styleClass",orientation:"orientation",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",breakpoint:"breakpoint",scrollHeight:"scrollHeight",disabled:[2,"disabled","disabled",x],tabindex:[2,"tabindex","tabindex",tt]},features:[D([Ie,{provide:Pn,useExisting:e},{provide:F,useExisting:e}]),N([h]),T],decls:6,vars:22,consts:[["rootmenu",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],[4,"ngIf"],[4,"ngTemplateOutlet"],["pMegaMenuSub","",3,"itemClick","menuFocus","menuBlur","menuKeydown","menuMouseDown","itemMouseEnter","itemTemplate","items","menuId","root","orientation","ariaLabel","disabled","tabindex","activeItem","level","ariaLabelledBy","focusedItemId","mobileActive","queryMatches","scrollHeight","pt","unstyled"],[3,"pBind"],["role","button","tabindex","0",3,"class","pBind","click","keydown",4,"ngIf"],["role","button","tabindex","0",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(i,n){if(i&1){let o=et();c(0,Bo,2,4,"div",2)(1,Oo,2,1,"ng-container",3)(2,Vo,1,0,"ng-container",4),p(3,"ul",5,0),q("itemClick",function(b){return k(o),M(n.onItemClick(b))})("menuFocus",function(b){return k(o),M(n.onMenuFocus(b))})("menuBlur",function(b){return k(o),M(n.onMenuBlur(b))})("menuKeydown",function(b){return k(o),M(n.onKeyDown(b))})("menuMouseDown",function(b){return k(o),M(n.onMenuMouseDown(b))})("itemMouseEnter",function(b){return k(o),M(n.onItemMouseEnter(b))}),m(),c(5,No,2,4,"div",2)}i&2&&(a("ngIf",n.startTemplate||n._startTemplate),d(),a("ngIf",!n.buttonTemplate&&!n._buttonTemplate),d(),a("ngTemplateOutlet",n.buttonTemplate||n._buttonTemplate),d(),a("itemTemplate",n.itemTemplate||n._itemTemplate)("items",n.processedItems)("menuId",n.id)("root",!0)("orientation",n.orientation)("ariaLabel",n.ariaLabel)("disabled",n.disabled)("tabindex",n.disabled?-1:n.tabindex)("activeItem",n.activeItem())("level",0)("ariaLabelledBy",n.ariaLabelledBy)("focusedItemId",n.focused?n.focusedItemId:void 0)("mobileActive",n.mobileActive)("queryMatches",n.queryMatches())("scrollHeight",n.scrollHeight)("pt",n.pt())("unstyled",n.unstyled()),f("id",n.id+"_list"),d(2),a("ngIf",n.endTemplate||n._endTemplate))},dependencies:[z,it,lt,de,Ho,ye,h,ln,Rt,C],encapsulation:2,changeDetection:0})}return e})(),xe=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[Ln,C,C]})}return e})();var Dn=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var $o=["header"],jo=["title"],Qo=["subtitle"],Uo=["content"],qo=["footer"],Ko=["*",[["p-header"]],[["p-footer"]]],Go=["*","p-header","p-footer"];function Zo(e,s){e&1&&L(0)}function Wo(e,s){if(e&1&&(p(0,"div",1),Z(1,1),c(2,Zo,1,0,"ng-container",2),m()),e&2){let t=l();u(t.cx("header")),a("pBind",t.ptm("header")),d(2),a("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Xo(e,s){if(e&1&&(R(0),K(1),H()),e&2){let t=l(2);d(),st(t.header)}}function Yo(e,s){e&1&&L(0)}function Jo(e,s){if(e&1&&(p(0,"div",1),c(1,Xo,2,1,"ng-container",3)(2,Yo,1,0,"ng-container",2),m()),e&2){let t=l();u(t.cx("title")),a("pBind",t.ptm("title")),d(),a("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),d(),a("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function tr(e,s){if(e&1&&(R(0),K(1),H()),e&2){let t=l(2);d(),st(t.subheader)}}function er(e,s){e&1&&L(0)}function nr(e,s){if(e&1&&(p(0,"div",1),c(1,tr,2,1,"ng-container",3)(2,er,1,0,"ng-container",2),m()),e&2){let t=l();u(t.cx("subtitle")),a("pBind",t.ptm("subtitle")),d(),a("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),d(),a("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function ir(e,s){e&1&&L(0)}function or(e,s){e&1&&L(0)}function rr(e,s){if(e&1&&(p(0,"div",1),Z(1,2),c(2,or,1,0,"ng-container",2),m()),e&2){let t=l();u(t.cx("footer")),a("pBind",t.ptm("footer")),d(2),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ar=`
    ${Dn}

    .p-card {
        display: block;
    }
`,sr={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Fn=(()=>{class e extends U{name="card";style=ar;classes=sr;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var On=new V("CARD_INSTANCE"),lr=(()=>{class e extends B{$pcCard=g(On,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(h,{self:!0});_componentStyle=g(Fn);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){je(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(i=>{this.el.nativeElement.style[i]=t[i]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=wt(null);getBlockableElement(){return this.el.nativeElement.children[0]}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-card"]],contentQueries:function(i,n,o){if(i&1&&(y(o,Wt,5),y(o,Xt,5),y(o,$o,4),y(o,jo,4),y(o,Qo,4),y(o,Uo,4),y(o,qo,4),y(o,ct,4)),i&2){let r;_(r=v())&&(n.headerFacet=r.first),_(r=v())&&(n.footerFacet=r.first),_(r=v())&&(n.headerTemplate=r.first),_(r=v())&&(n.titleTemplate=r.first),_(r=v())&&(n.subtitleTemplate=r.first),_(r=v())&&(n.contentTemplate=r.first),_(r=v())&&(n.footerTemplate=r.first),_(r=v())&&(n.templates=r)}},hostVars:4,hostBindings:function(i,n){i&2&&(Et(n._style()),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[D([Fn,{provide:On,useExisting:e},{provide:F,useExisting:e}]),N([h]),T],ngContentSelectors:Go,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,n){i&1&&(ot(Ko),c(0,Wo,3,4,"div",0),p(1,"div",1),c(2,Jo,3,5,"div",0)(3,nr,3,5,"div",0),p(4,"div",1),Z(5),c(6,ir,1,0,"ng-container",2),m(),c(7,rr,3,4,"div",0),m()),i&2&&(a("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),d(),u(n.cx("body")),a("pBind",n.ptm("body")),d(),a("ngIf",n.header||n.titleTemplate||n._titleTemplate),d(),a("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),d(),u(n.cx("content")),a("pBind",n.ptm("content")),d(2),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),d(),a("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[z,it,lt,C,X,h],encapsulation:2,changeDetection:0})}return e})(),Te=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[lr,C,X,C,X]})}return e})();var Vn=`
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: row;
        gap: dt('carousel.content.gap');
    }

    .p-carousel-content:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-item-list {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-item-list:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-prev-button,
    .p-carousel-next-button {
        align-self: center;
        flex-shrink: 0;
    }

    .p-carousel-indicator-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: dt('carousel.indicator.list.padding');
        gap: dt('carousel.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-carousel-indicator-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('carousel.indicator.background');
        width: dt('carousel.indicator.width');
        height: dt('carousel.indicator.height');
        border: 0 none;
        transition:
            background dt('carousel.transition.duration'),
            color dt('carousel.transition.duration'),
            outline-color dt('carousel.transition.duration'),
            box-shadow dt('carousel.transition.duration');
        outline-color: transparent;
        border-radius: dt('carousel.indicator.border.radius');
        padding: 0;
        margin: 0;
        user-select: none;
        cursor: pointer;
    }

    .p-carousel-indicator-button:focus-visible {
        box-shadow: dt('carousel.indicator.focus.ring.shadow');
        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');
        outline-offset: dt('carousel.indicator.focus.ring.offset');
    }

    .p-carousel-indicator-button:hover {
        background: dt('carousel.indicator.hover.background');
    }

    .p-carousel-indicator-active .p-carousel-indicator-button {
        background: dt('carousel.indicator.active.background');
    }

    .p-carousel-vertical .p-carousel-content {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-item-list {
        flex-direction: column;
        height: 100%;
    }

    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
`;var dr=["item"],cr=["header"],ur=["footer"],pr=["previousicon"],mr=["nexticon"],gr=["itemsContainer"],hr=["indicatorContent"],br=[[["p-header"]],[["p-footer"]]],fr=["p-header","p-footer"],_r=e=>({height:e}),Jt=e=>({index:e}),Ce=e=>({$implicit:e});function vr(e,s){e&1&&L(0)}function yr(e,s){if(e&1&&(p(0,"div",5),Z(1),c(2,vr,1,0,"ng-container",13),m()),e&2){let t=l();u(t.cx("header")),a("pBind",t.ptm("header")),d(2),a("ngTemplateOutlet",t.headerTemplate)}}function Ir(e,s){e&1&&(P(),w(0,"svg",18))}function xr(e,s){e&1&&(P(),w(0,"svg",19))}function Tr(e,s){if(e&1&&(R(0),c(1,Ir,1,0,"svg",16)(2,xr,1,0,"svg",17),H()),e&2){let t=l(3);d(),a("ngIf",!t.isVertical()),d(),a("ngIf",t.isVertical())}}function Cr(e,s){}function wr(e,s){e&1&&c(0,Cr,0,0,"ng-template")}function Sr(e,s){if(e&1&&(R(0),c(1,wr,1,0,null,13),H()),e&2){let t=l(3);d(),a("ngTemplateOutlet",t.previousIconTemplate||t._previousIconTemplate)}}function kr(e,s){if(e&1&&c(0,Tr,3,2,"ng-container",15)(1,Sr,2,1,"ng-container",15),e&2){let t=l(2);a("ngIf",!t.previousIconTemplate&&!t._previousIconTemplate&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon)),d(),a("ngIf",(t.previousIconTemplate||t._previousIconTemplate)&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon))}}function Mr(e,s){if(e&1){let t=et();p(0,"p-button",14),q("click",function(n){k(t);let o=l();return M(o.navBackward(n))}),c(1,kr,2,2,"ng-template",null,1,rt),m()}if(e&2){let t=l();u(t.cx("pcPrevButton")),a("text",!0)("buttonProps",t.prevButtonProps)("pt",t.ptm("pcPrevButton"))("unstyled",t.unstyled()),f("aria-label",t.ariaPrevButtonLabel())}}function Er(e,s){e&1&&L(0)}function Br(e,s){if(e&1&&(p(0,"div",5),c(1,Er,1,0,"ng-container",20),m()),e&2){let t=s.$implicit,i=s.index,n=l();u(n.cx("itemClone",nt(11,Jt,i))),a("pBind",n.ptm("itemClone")),f("aria-hidden",n.totalShiftedItems*-1!==n.value.length)("aria-label",n.ariaSlideNumber(i))("aria-roledescription",n.ariaSlideLabel())("data-p-carousel-item-active",n.totalShiftedItems*-1===n.value.length+n._numVisible)("data-p-carousel-item-start",i===0)("data-p-carousel-item-end",n.clonedItemsForStarting&&n.clonedItemsForStarting.length-1===i),d(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",nt(13,Ce,t))}}function Pr(e,s){e&1&&L(0)}function Lr(e,s){if(e&1&&(p(0,"div",21),c(1,Pr,1,0,"ng-container",20),m()),e&2){let t=s.$implicit,i=s.index,n=l();u(n.cx("item",nt(11,Jt,i))),a("pBind",n.getItemPTOptions("item",i)),f("aria-hidden",!(n.firstIndex()<=i&&n.lastIndex()>=i))("aria-label",n.ariaSlideNumber(i))("aria-roledescription",n.ariaSlideLabel())("data-p-carousel-item-active",n.firstIndex()<=i&&n.lastIndex()>=i)("data-p-carousel-item-start",n.firstIndex()===i)("data-p-carousel-item-end",n.lastIndex()===i),d(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",nt(13,Ce,t))}}function Dr(e,s){e&1&&L(0)}function Fr(e,s){if(e&1&&(p(0,"div",5),c(1,Dr,1,0,"ng-container",20),m()),e&2){let t=s.$implicit,i=s.index,n=l();u(n.cx("itemClone",nt(8,Jt,i))),a("pBind",n.ptm("itemClone")),f("data-p-carousel-item-active",!1)("data-p-carousel-item-start",!1)("data-p-carousel-item-end",!1),d(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",nt(10,Ce,t))}}function Or(e,s){e&1&&(P(),w(0,"svg",25))}function Vr(e,s){e&1&&(P(),w(0,"svg",26))}function Ar(e,s){if(e&1&&(R(0),c(1,Or,1,0,"svg",23)(2,Vr,1,0,"svg",24),H()),e&2){let t=l(3);d(),a("ngIf",!t.isVertical()),d(),a("ngIf",t.isVertical())}}function Nr(e,s){}function zr(e,s){e&1&&c(0,Nr,0,0,"ng-template")}function Rr(e,s){if(e&1&&(p(0,"span"),c(1,zr,1,0,null,13),m()),e&2){let t=l(3);d(),a("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Hr(e,s){if(e&1&&c(0,Ar,3,2,"ng-container",15)(1,Rr,2,1,"span",15),e&2){let t=l(2);a("ngIf",!t.nextIconTemplate&&!t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon)),d(),a("ngIf",t.nextIconTemplate||t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon))}}function $r(e,s){if(e&1){let t=et();p(0,"p-button",22),q("click",function(n){k(t);let o=l();return M(o.navForward(n))}),c(1,Hr,2,2,"ng-template",null,1,rt),m()}if(e&2){let t=l();u(t.cx("pcNextButton")),a("buttonProps",t.nextButtonProps)("text",!0)("pt",t.ptm("pcNextButton"))("unstyled",t.unstyled()),f("aria-label",t.ariaNextButtonLabel())}}function jr(e,s){if(e&1){let t=et();p(0,"li",5)(1,"button",28),q("click",function(n){let o=k(t).index,r=l(2);return M(r.onDotClick(n,o))}),m()()}if(e&2){let t=s.index,i=l(2);u(i.cx("indicator",nt(11,Jt,t))),a("pBind",i.getIndicatorPTOptions("indicator",t)),f("data-p-active",i._page===t),d(),u(i.cx("indicatorButton")),a("ngStyle",i.indicatorStyle)("tabindex",i._page===t?0:-1)("pBind",i.getIndicatorPTOptions("indicatorButton",t)),f("aria-label",i.ariaPageLabel(t+1))("aria-current",i._page===t?"page":void 0)}}function Qr(e,s){if(e&1){let t=et();p(0,"ul",27,2),q("keydown",function(n){k(t);let o=l();return M(o.onIndicatorKeydown(n))}),c(2,jr,2,13,"li",9),m()}if(e&2){let t=l();u(t.cx("indicatorList")),a("ngStyle",t.indicatorsContentStyle)("pBind",t.ptm("indicatorList")),d(2),a("ngForOf",t.totalDotsArray())}}function Ur(e,s){e&1&&L(0)}function qr(e,s){if(e&1&&(p(0,"div",5),Z(1,1),c(2,Ur,1,0,"ng-container",13),m()),e&2){let t=l();u(t.cx("footer")),a("pBind",t.ptm("footer")),d(2),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Kr={root:({instance:e})=>["p-carousel p-component",{"p-carousel-vertical":e.isVertical(),"p-carousel-horizontal":!e.isVertical()}],header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:({instance:e})=>["p-carousel-prev-button",{"p-disabled":e.isBackwardNavDisabled()}],viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:({instance:e,index:s})=>["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":e.totalShiftedItems*-1===e.value.length,"p-carousel-item-start":s===0,"p-carousel-item-end":e.clonedItemsForStarting.length-1===s}],item:({instance:e,index:s})=>["p-carousel-item",{"p-carousel-item-active":e.firstIndex()<=s&&e.lastIndex()>=s,"p-carousel-item-start":e.firstIndex()===s,"p-carousel-item-end":e.lastIndex()===s}],pcNextButton:({instance:e})=>["p-carousel-next-button",{"p-disabled":e.isForwardNavDisabled()}],indicatorList:({instance:e})=>["p-carousel-indicator-list",e.indicatorsContentClass],indicator:({instance:e,index:s})=>["p-carousel-indicator",{"p-carousel-indicator-active":e._page===s}],indicatorButton:({instance:e})=>["p-carousel-indicator-button",e.indicatorStyleClass],footer:"p-carousel-footer"},An=(()=>{class e extends U{name="carousel";style=Vn;classes=Kr;static \u0275fac=(()=>{let t;return function(n){return(t||(t=I(e)))(n||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var Gr=(()=>{class e extends B{el;zone;bindDirectiveInstance=g(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}get page(){return this._page}set page(t){this.isCreated&&t!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),t>this._page&&t<=this.totalDots()-1?this.step(-1,t):t<this._page&&this.step(1,t)),this._page=t}get numVisible(){return this._numVisible}set numVisible(t){this._numVisible=t}get numScroll(){return this._numVisible}set numScroll(t){this._numScroll=t}responsiveOptions;orientation="horizontal";verticalViewPortHeight="300px";contentClass="";indicatorsContentClass="";indicatorsContentStyle;indicatorStyleClass="";indicatorStyle;get value(){return this._value}set value(t){this._value=t}circular=!1;showIndicators=!0;showNavigators=!0;autoplayInterval=0;styleClass;prevButtonProps={severity:"secondary",text:!0,rounded:!0};nextButtonProps={severity:"secondary",text:!0,rounded:!0};onPage=new G;itemsContainer;indicatorContent;headerFacet;footerFacet;_numVisible=1;_numScroll=1;_oldNumScroll=0;prevState={numScroll:0,numVisible:0,value:[]};defaultNumScroll=1;defaultNumVisible=1;_page=0;_value;carouselStyle;id;totalShiftedItems;isRemainingItemsAdded=!1;animationTimeout;translateTimeout;remainingItems=0;_items;startPos;documentResizeListener;clonedItemsForStarting;clonedItemsForFinishing;allowAutoplay;interval;isCreated;swipeThreshold=20;itemTemplate;headerTemplate;footerTemplate;previousIconTemplate;nextIconTemplate;_itemTemplate;_headerTemplate;_footerTemplate;_previousIconTemplate;_nextIconTemplate;window;_componentStyle=g(An);constructor(t,i){super(),this.el=t,this.zone=i,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}onChanges(t){W(this.platformId)&&(t.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(t.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),t.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}templates;onAfterContentInit(){this.id=gt("pn_id_"),W(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.templates?.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"previousicon":this._previousIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}}),this.cd.detectChanges()}onAfterContentChecked(){if(W(this.platformId)){let t=this.isCircular(),i=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let n=this._page;this.totalDots()!==0&&n>=this.totalDots()&&(n=this.totalDots()-1,this._page=n,this.onPage.emit({page:this.page})),i=n*this._numScroll*-1,t&&(i-=this._numVisible),n===this.totalDots()-1&&this.remainingItems>0?(i+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,i!==this.totalShiftedItems&&(this.totalShiftedItems=i),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${i*(100/this._numVisible)}%, 0)`:`translate3d(${i*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}t&&(this.page===0?i=-1*this._numVisible:i===0&&(i=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),i!==this.totalShiftedItems&&(this.totalShiftedItems=i))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",pe(this.carouselStyle,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.carouselStyle),pe(this.carouselStyle,"nonce",this.config?.csp()?.nonce));let t=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions&&!this.$unstyled()){this.responsiveOptions.sort((i,n)=>{let o=i.breakpoint,r=n.breakpoint,b=null;return o==null&&r!=null?b=-1:o!=null&&r==null?b=1:o==null&&r==null?b=0:typeof o=="string"&&typeof r=="string"?b=o.localeCompare(r,void 0,{numeric:!0}):b=o<r?-1:o>r?1:0,-1*b});for(let i=0;i<this.responsiveOptions.length;i++){let n=this.responsiveOptions[i];t+=`
                    @media screen and (max-width: ${n.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/n.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=t}calculatePosition(){if(this.responsiveOptions){let t={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let i=window.innerWidth;for(let n=0;n<this.responsiveOptions.length;n++){let o=this.responsiveOptions[n];parseInt(o.breakpoint,10)>=i&&(t=o)}}if(this._numScroll!==t.numScroll){let i=this._page;i=Math.floor(i*this._numScroll/t.numScroll);let n=t.numScroll*this.page*-1;this.isCircular()&&(n-=t.numVisible),this.totalShiftedItems=n,this._numScroll=t.numScroll,this._page=i,this.onPage.emit({page:this.page})}this._numVisible!==t.numVisible&&(this._numVisible=t.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let t=this.totalDots();return t<=0?[]:Array(t).fill(0)}isVertical(){return this.orientation==="vertical"}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(t,i){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,i),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}navBackward(t,i){(this.isCircular()||this._page!==0)&&this.step(1,i),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}onDotClick(t,i){let n=this._page;this.autoplayInterval&&this.stopAutoplay(),i>n?this.navForward(t,i):i<n&&this.navBackward(t,i)}onIndicatorKeydown(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break}}onRightKey(){let t=[...Lt(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')],i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===t.length?t.length-1:i+1)}onLeftKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)}onHomeKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)}onEndKey(){let t=[...Lt(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')],i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,t.length-1)}onTabKey(){let t=[...Lt(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')],i=t.findIndex(r=>Re(r,"data-p-highlight")===!0),n=Q(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]'),o=t.findIndex(r=>r===n.parentElement);t[o].children[0].tabIndex="-1",t[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let t=[...Lt(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')],i=Q(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(n=>n===i?.parentElement)}changedFocusedIndicator(t,i){let n=[...Lt(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')];n[t].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()}step(t,i){let n=this.totalShiftedItems,o=this.isCircular();if(i!=null)n=this._numScroll*i*-1,o&&(n-=this._numVisible),this.isRemainingItemsAdded=!1;else{n+=this._numScroll*t,this.isRemainingItemsAdded&&(n+=this.remainingItems-this._numScroll*t,this.isRemainingItemsAdded=!1);let r=o?n+this._numVisible:n;i=Math.abs(Math.floor(r/this._numScroll))}o&&this.page===this.totalDots()-1&&t===-1?(n=-1*(this.value.length+this._numVisible),i=0):o&&this.page===0&&t===1?(n=0,i=this.totalDots()-1):i===this.totalDots()-1&&this.remainingItems>0&&(n+=this.remainingItems*-1-this._numScroll*t,this.isRemainingItemsAdded=!0),this.itemsContainer&&(!this.$unstyled()&&ce(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${n*(100/this._numVisible)}%, 0)`:`translate3d(${n*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n,this._page=i,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(t=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,t&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(!this.$unstyled()&&Nt(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="",(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(t){let i=t.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}onTouchMove(t){t.cancelable&&t.preventDefault()}onTouchEnd(t){let i=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,i.pageY-this.startPos.y):this.changePageOnTouch(t,i.pageX-this.startPos.x)}changePageOnTouch(t,i){Math.abs(i)>this.swipeThreshold&&(i<0?this.navForward(t):this.navBackward(t))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria?.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria?.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria?.nextPageLabel:void 0}ariaSlideNumber(t){return this.config.translation.aria?this.config.translation.aria?.slideNumber?.replace(/{slideNumber}/g,t):void 0}ariaPageLabel(t){return this.config.translation.aria?this.config.translation.aria?.pageLabel?.replace(/{page}/g,t):void 0}getIndicatorPTOptions(t,i){return this.ptm(t,{context:{highlighted:i===this._page}})}getItemPTOptions(t,i){return this.ptm(t,{context:{index:i,active:this.firstIndex()<=i&&this.lastIndex()>=i,start:this.firstIndex()===i,end:this.lastIndex()===i}})}bindDocumentListeners(){W(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",t=>{this.calculatePosition()})))}unbindDocumentListeners(){W(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}static \u0275fac=function(i){return new(i||e)(St(Qt),St(jt))};static \u0275cmp=S({type:e,selectors:[["p-carousel"]],contentQueries:function(i,n,o){if(i&1&&(y(o,Wt,5),y(o,Xt,5),y(o,dr,4),y(o,cr,4),y(o,ur,4),y(o,pr,4),y(o,mr,4),y(o,ct,4)),i&2){let r;_(r=v())&&(n.headerFacet=r.first),_(r=v())&&(n.footerFacet=r.first),_(r=v())&&(n.itemTemplate=r.first),_(r=v())&&(n.headerTemplate=r.first),_(r=v())&&(n.footerTemplate=r.first),_(r=v())&&(n.previousIconTemplate=r.first),_(r=v())&&(n.nextIconTemplate=r.first),_(r=v())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(kt(gr,5),kt(hr,5)),i&2){let o;_(o=v())&&(n.itemsContainer=o.first),_(o=v())&&(n.indicatorContent=o.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(f("id",n.id)("role","region"),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:[2,"circular","circular",x],showIndicators:[2,"showIndicators","showIndicators",x],showNavigators:[2,"showNavigators","showNavigators",x],autoplayInterval:[2,"autoplayInterval","autoplayInterval",tt],styleClass:"styleClass",prevButtonProps:"prevButtonProps",nextButtonProps:"nextButtonProps"},outputs:{onPage:"onPage"},features:[D([An,{provide:F,useExisting:e}]),N([h]),T],ngContentSelectors:fr,decls:13,vars:25,consts:[["itemsContainer",""],["icon",""],["indicatorContent",""],[3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],[3,"pBind"],["attr.data-pc-group-section","navigator",3,"class","text","buttonProps","pt","unstyled","click",4,"ngIf"],[3,"touchend","touchstart","touchmove","ngStyle","pBind"],[3,"transitionend","pBind"],[3,"class","pBind",4,"ngFor","ngForOf"],["role","group",3,"class","pBind",4,"ngFor","ngForOf"],["type","button","attr.data-pc-group-section","navigator",3,"class","buttonProps","text","pt","unstyled","click",4,"ngIf"],[3,"class","ngStyle","pBind","keydown",4,"ngIf"],[4,"ngTemplateOutlet"],["attr.data-pc-group-section","navigator",3,"click","text","buttonProps","pt","unstyled"],[4,"ngIf"],["data-p-icon","chevron-left",4,"ngIf"],["data-p-icon","chevron-up",4,"ngIf"],["data-p-icon","chevron-left"],["data-p-icon","chevron-up"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","group",3,"pBind"],["type","button","attr.data-pc-group-section","navigator",3,"click","buttonProps","text","pt","unstyled"],["data-p-icon","chevron-right",4,"ngIf"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-right"],["data-p-icon","chevron-down"],[3,"keydown","ngStyle","pBind"],["type","button",3,"click","ngStyle","tabindex","pBind"]],template:function(i,n){if(i&1){let o=et();ot(br),c(0,yr,3,4,"div",3),p(1,"div",4)(2,"div",5),c(3,Mr,3,7,"p-button",6),p(4,"div",7),q("touchend",function(b){return k(o),M(n.onTouchEnd(b))})("touchstart",function(b){return k(o),M(n.onTouchStart(b))})("touchmove",function(b){return k(o),M(n.onTouchMove(b))}),p(5,"div",8,0),q("transitionend",function(){return k(o),M(n.onTransitionEnd())}),c(7,Br,2,15,"div",9)(8,Lr,2,15,"div",10)(9,Fr,2,12,"div",9),m()(),c(10,$r,3,7,"p-button",11),m(),c(11,Qr,3,5,"ul",12),m(),c(12,qr,3,4,"div",3)}i&2&&(a("ngIf",n.headerFacet||n.headerTemplate),d(),u(n.contentClass),a("ngClass",n.cx("contentContainer"))("pBind",n.ptm("contentContainer")),d(),u(n.cx("content")),a("pBind",n.ptm("content")),f("aria-live",n.allowAutoplay?"polite":"off"),d(),a("ngIf",n.showNavigators),d(),u(n.cx("viewport")),a("ngStyle",nt(23,_r,n.isVertical()?n.verticalViewPortHeight:"auto"))("pBind",n.ptm("viewport")),d(),u(n.cx("itemList")),a("pBind",n.ptm("itemList")),d(2),a("ngForOf",n.clonedItemsForStarting),d(),a("ngForOf",n.value),d(),a("ngForOf",n.clonedItemsForFinishing),d(),a("ngIf",n.showNavigators),d(),a("ngIf",n.showIndicators),d(),a("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[z,Gt,Zt,it,lt,Bt,Ze,Tt,be,Ge,Ke,We,C,X,h],encapsulation:2,changeDetection:0})}return e})(),Nn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[Gr,C,C]})}return e})();var te=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=A({type:e});static \u0275inj=O({imports:[Nn,Te,z,Tt,$t,ve,xe,C,Xe,Tt,$t,ve,xe,C,Te]})};function Zr(e,s){e&1&&(p(0,"div",3),P(),p(1,"svg",4),w(2,"path",5)(3,"mask",6),m(),Se(),p(4,"button",7),K(5,"Sobre m\xED"),m(),p(6,"button",7),K(7,"Cont\xE1ctame"),m(),p(8,"button",7),K(9,"Otros"),m()())}function Wr(e,s){e&1&&(p(0,"div",3),w(1,"p-avatar",8),m())}var zn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-header"]],decls:5,vars:0,consts:[["start",""],["end",""],[1,"p-component","p-toolbar","p-toolbar-start-end",2,"background","#0f172a","border","0","border-radius","0"],[1,"flex","items-center","gap-2"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",2,"width","2rem","margin-right","1rem"],["d","...","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],[1,"nav-btn"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",1,"p-avatar"]],template:function(t,i){t&1&&(p(0,"p-toolbar",2),c(1,Zr,10,0,"ng-template",null,0,rt)(3,Wr,2,0,"ng-template",null,1,rt),m())},dependencies:[te,fe,_e,$t,Tt],styles:[".white-text[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{color:#fff!important}.nav-btn[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff;padding:.4rem .9rem;border-radius:999px;cursor:pointer;font:inherit;transition:background .2s ease,color .2s ease,box-shadow .2s ease}.nav-btn[_ngcontent-%COMP%]:hover{background:#e5e7eb;color:#000;box-shadow:0 0 12px #94a3b8a6}"]})};export{ps as a,lr as b,te as c,zn as d};
