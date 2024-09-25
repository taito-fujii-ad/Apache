if (window.ContextHub && ContextHub.SegmentEngine) {
var S = ContextHub.SegmentEngine.Segment;
var SR = ContextHub.SegmentEngine.SegmentReference;
var P = ContextHub.SegmentEngine.Property;
var O = ContextHub.SegmentEngine.Operator;
var FR = ContextHub.SegmentEngine.ScriptReference;
var D = '/conf/we-retail/settings/wcm/segments/';

new S(["Summer Female Over 30",D+"summer\u002Dfemale\u002Dover\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/summer"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/female"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/over\u002D30")));

new S(["Age Over 30",D+"over\u002D30",0],new O('and',new O('greater\u002Dthan\u002Dor\u002Dequal.number',new P("profile\/age"),"30")));

new S(["Summer Male Over 30",D+"summer\u002Dmale\u002Dover\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/summer"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/male"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/over\u002D30")));

new S(["Order Value between $75 and $100",D+"order\u002Dvalue\u002D75\u002Dto\u002D100",0],new O('and',new O('greater\u002Dthan\u002Dor\u002Dequal.number',new P("cart\/totalPriceFloat"),"75"),new O('less\u002Dthan.number',new P("cart\/totalPriceFloat"),"100")));

new S(["Summer Female",D+"summer\u002Dfemale",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/summer"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/female")));

new S(["Order Value Over $100",D+"order\u002Dvalue\u002Dover\u002D100",0],new O('and',new O('greater\u002Dthan.number',new P("cart\/totalPriceFloat"),"100")));

new S(["Male Over 30",D+"male\u002Dover\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/male"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/over\u002D30")));

new S(["Winter Male Under 30",D+"winter\u002Dmale\u002Dunder\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/winter"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/male"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/under\u002D30")));

new S(["Female Over 30",D+"female\u002Dover\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/female"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/over\u002D30")));

new S(["Winter Female",D+"winter\u002Dfemale",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/winter"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/female")));

new S(["Summer Male",D+"summer\u002Dmale",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/summer"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/male")));

new S(["Winter Male",D+"winter\u002Dmale",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/winter"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/male")));

new S(["Male Under 30",D+"male\u002Dunder\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/male"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/under\u002D30")));

new S(["Winter Female Over 30",D+"winter\u002Dfemale\u002Dover\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/winter"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/female"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/over\u002D30")));

new S(["Season Winter",D+"winter",0],new O('or',new O('and',new O('greater\u002Dthan.number',new P("geolocation\/latitude"),"40"),new O('or',new O('greater\u002Dthan\u002Dor\u002Dequal.number',new P("surferinfo\/month"),"9"),new O('less\u002Dthan.number',new P("surferinfo\/month"),"4"))),new O('and',new O('less\u002Dthan.number',new P("geolocation\/latitude"),"\u002D38"),new O('greater\u002Dthan\u002Dor\u002Dequal.number',new P("surferinfo\/month"),"4"),new O('less\u002Dthan.number',new P("surferinfo\/month"),"9")),new O('greater\u002Dthan.number',new P("geolocation\/latitude"),"70"),new O('less\u002Dthan.number',new P("geolocation\/latitude"),"\u002D50")));

new S(["Summer Female Under 30",D+"summer\u002Dfemale\u002Dunder\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/summer"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/female"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/under\u002D30")));

new S(["Male",D+"male",0],new O('and',new O('equal.string',new P("profile\/gender"),"male")));

new S(["Age Under 30",D+"under\u002D30",0],new O('and',new O('less\u002Dthan.number',new P("profile\/age"),"30")));

new S(["Season Summer",D+"summer",0],new O('or',new O('and',new O('greater\u002Dthan.number',new P("geolocation\/latitude"),"40"),new O('greater\u002Dthan\u002Dor\u002Dequal.number',new P("surferinfo\/month"),"4"),new O('less\u002Dthan.number',new P("surferinfo\/month"),"9")),new O('and',new O('less\u002Dthan.number',new P("geolocation\/latitude"),"\u002D38"),new O('or',new O('less\u002Dthan.number',new P("surferinfo\/month"),"4"),new O('greater\u002Dthan\u002Dor\u002Dequal.number',new P("surferinfo\/month"),"9"))),new O('and',new O('greater\u002Dthan.number',new P("geolocation\/latitude"),"\u002D38"),new O('less\u002Dthan.number',new P("geolocation\/latitude"),"40"))));

new S(["Female",D+"female",0],new O('and',new O('equal.string',new P("profile\/gender"),"female")));

new S(["Summer Male Under 30",D+"summer\u002Dmale\u002Dunder\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/summer"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/male"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/under\u002D30")));

new S(["Winter Male Over 30",D+"winter\u002Dmale\u002Dover\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/winter"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/male"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/over\u002D30")));

new S(["Winter Female Under 30",D+"winter\u002Dfemale\u002Dunder\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/winter"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/female"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/under\u002D30")));

new S(["Female Under 30",D+"female\u002Dunder\u002D30",0],new O('and',new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/female"),new SR("\/conf\/we\u002Dretail\/settings\/wcm\/segments\/under\u002D30")));

}
