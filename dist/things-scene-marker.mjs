import{Container as e,TableLayout as t,Model as r,Component as o,RectPath as l,Shape as i}from"@hatiolab/things-scene";const n={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"rows",name:"rows"},{type:"number",label:"columns",name:"columns"},{type:"select",label:"direction",name:"direction",property:{options:[{display:"Horizontal",value:"horizontal"},{display:"Vertical",value:"vertical"}]}},{type:"number",label:"round",name:"round"},{type:"legend-status",label:"",name:"status"}]};var a={ondragmove:function(e,t,r){var{left:o,top:l,width:i,height:n}=r.model,a=(r.transcoordP2S(e.x,e.y).x-o)/(i/2)*100;a=s(a,i,n),r.set({round:a})}};function s(e,t,r){var o=t>r?r/t*100:100;return e>=o?e=o:e<=0&&(e=0),e}class d extends e{ready(){this.rebuildLegendItems()}get showMoveHandle(){return!1}render(e){var{round:t=0}=this.model,{left:r,top:o,width:l,height:i}=this.bounds;if(e.beginPath(),(t=s(t,l,i))>0){var n=t/100*(l/2);e.moveTo(r+n,o),e.lineTo(r+l-n,o),e.quadraticCurveTo(r+l,o,r+l,o+n),e.lineTo(r+l,o+i-n),e.quadraticCurveTo(r+l,o+i,r+l-n,o+i),e.lineTo(r+n,o+i),e.quadraticCurveTo(r,o+i,r,o+i-n),e.lineTo(r,o+n),e.quadraticCurveTo(r,o,r+n,o),this.model.padding={top:t/2,left:t/2,right:t/2,bottom:t/2}}else e.rect(r,o,l,i);this.drawFill(e),this.drawStroke(e)}get controls(){var{left:e,top:t,width:r,round:o,height:l}=this.model;return[{x:e+r/2*((o=null==o?0:s(o,r,l))/100),y:t,handler:a}]}get layout(){return t}get nature(){return n}rebuildLegendItems(){this.components.length&&this.components.slice().forEach(e=>e.dispose());var{left:e,top:t,width:o,height:l,fillStyle:i,strokeStyle:n,fontColor:a,fontFamily:s,fontSize:d,lineHeight:h,textAlign:u="left",round:g=0,italic:c,bold:m,lineWidth:p=0,rows:b,columns:f,status:v={}}=this.model;let y=v.ranges||[];var b,f,w=y.length;this.add(y.map(e=>r.compile({type:"legend-item",text:e.description||`${e.min||""} ~ ${e.max||""}`,width:1,height:1,color:e.color,fontColor:a,fontFamily:s,fontSize:d,lineHeight:h,italic:c,bold:m,textAlign:u}))),f||b?f&&!b?b=Math.ceil(w/Number(f)):b&&!f&&(f=Math.ceil(w/Number(b))):(b=w,f=1),this.set({layoutConfig:{rows:b,columns:f}})}get hasTextProperty(){return!0}get textHidden(){return!0}onchange(e,t){this.rebuildLegendItems()}}o.register("legend",d);const h={mutable:!1,resizable:!1,rotatable:!1,properties:[]};class u extends(l(i)){render(e){var{left:t,top:r,height:o,color:l}=this.model;e.beginPath();var i=o/2,n=i/2;e.save(),e.fillStyle=l,e.ellipse(t+i,r+i,n,n,0,0,2*Math.PI,!0),e.shadowColor="rgba(0,0,0,0.15)",e.shadowBlur=2,e.shadowOffsetX=1,e.shadowOffsetY=2,e.fill(),e.restore()}onchange(e){e.hasOwnProperty("height")&&this.set("paddingLeft",e.height)}get stuck(){return!0}get capturable(){return!1}get nature(){return h}}o.register("legend-item",u);export{d as Legend,u as LegendItem};
