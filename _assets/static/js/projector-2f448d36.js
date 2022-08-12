THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0,this.renderOrder=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0,this.renderOrder=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0,this.renderOrder=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null,this.renderOrder=0},THREE.Projector=function(){function e(t){if(!1!==t.visible){if(t instanceof THREE.Light)O.lights.push(t);else if(t instanceof THREE.Mesh||t instanceof THREE.Line||t instanceof THREE.Points){if(!1===t.material.visible)return;if(!0===t.frustumCulled&&!1===G.intersectsObject(t))return;r(t)}else if(t instanceof THREE.Sprite){if(!1===t.material.visible)return;if(!0===t.frustumCulled&&!1===G.intersectsSprite(t))return;r(t)}for(var n=t.children,i=0,o=n.length;i<o;i++)e(n[i])}}function r(e){p=n(),p.id=e.id,p.object=e,C.setFromMatrixPosition(e.matrixWorld),C.applyMatrix4(A),p.z=C.z,p.renderOrder=e.renderOrder,O.objects.push(p)}function t(e,r,t){var n=1/e.w;e.z*=n,e.z>=-1&&e.z<=1&&(y=s(),y.id=r.id,y.x=e.x*n,y.y=e.y*n,y.z=e.z,y.renderOrder=r.renderOrder,y.object=r,y.rotation=r.rotation,y.scale.x=r.scale.x*Math.abs(y.x-(e.x+t.projectionMatrix.elements[0])/(e.w+t.projectionMatrix.elements[12])),y.scale.y=r.scale.y*Math.abs(y.y-(e.y+t.projectionMatrix.elements[5])/(e.w+t.projectionMatrix.elements[13])),y.material=r.material,O.elements.push(y))}function n(){if(E===H){var e=new THREE.RenderableObject;return T.push(e),H++,E++,e}return T[E++]}function i(){if(d===w){var e=new THREE.RenderableVertex;return g.push(e),w++,d++,e}return g[d++]}function o(){if(h===M){var e=new THREE.RenderableFace;return S.push(e),M++,h++,e}return S[h++]}function a(){if(v===z){var e=new THREE.RenderableLine;return b.push(e),z++,v++,e}return b[v++]}function s(){if(x===j){var e=new THREE.RenderableSprite;return V.push(e),j++,x++,e}return V[x++]}function l(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.z!==r.z?r.z-e.z:e.id!==r.id?e.id-r.id:0}function c(e,r){var t=0,n=1,i=e.z+e.w,o=r.z+r.w,a=-e.z+e.w,s=-r.z+r.w;return i>=0&&o>=0&&a>=0&&s>=0||!(i<0&&o<0||a<0&&s<0)&&(i<0?t=Math.max(t,i/(i-o)):o<0&&(n=Math.min(n,i/(i-o))),a<0?t=Math.max(t,a/(a-s)):s<0&&(n=Math.min(n,a/(a-s))),!(n<t)&&(e.lerp(r,t),r.lerp(e,1-n),!0))}var p,E,u,d,f,h,m,v,y,x,R,T=[],H=0,g=[],w=0,S=[],M=0,b=[],z=0,V=[],j=0,O={objects:[],lights:[],elements:[]},C=new THREE.Vector3,L=new THREE.Vector4,k=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),N=new THREE.Box3,W=new Array(3),B=new THREE.Matrix4,A=new THREE.Matrix4,F=new THREE.Matrix4,P=new THREE.Matrix3,G=new THREE.Frustum,D=new THREE.Vector4,I=new THREE.Vector4;this.projectVector=function(e,r){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(r)},this.unprojectVector=function(e,r){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(r)},this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var U=function(){function e(e){T=e,H=T.material,w.getNormalMatrix(T.matrixWorld),v.length=0,y.length=0,x.length=0}function r(e){var r=e.position,t=e.positionWorld,n=e.positionScreen;t.copy(r).applyMatrix4(R),n.copy(t).applyMatrix4(A);var i=1/n.w;n.x*=i,n.y*=i,n.z*=i,e.visible=n.x>=-1&&n.x<=1&&n.y>=-1&&n.y<=1&&n.z>=-1&&n.z<=1}function t(e,t,n){u=i(),u.position.set(e,t,n),r(u)}function n(e,r,t){v.push(e,r,t)}function s(e,r,t){y.push(e,r,t)}function l(e,r){x.push(e,r)}function p(e,r,t){return!0===e.visible||!0===r.visible||!0===t.visible||(W[0]=e.positionScreen,W[1]=r.positionScreen,W[2]=t.positionScreen,k.intersectsBox(N.setFromPoints(W)))}function E(e,r,t){return(t.positionScreen.x-e.positionScreen.x)*(r.positionScreen.y-e.positionScreen.y)-(t.positionScreen.y-e.positionScreen.y)*(r.positionScreen.x-e.positionScreen.x)<0}function d(e,r){var t=g[e],n=g[r];t.positionScreen.copy(t.position).applyMatrix4(F),n.positionScreen.copy(n.position).applyMatrix4(F),!0===c(t.positionScreen,n.positionScreen)&&(t.positionScreen.multiplyScalar(1/t.positionScreen.w),n.positionScreen.multiplyScalar(1/n.positionScreen.w),m=a(),m.id=T.id,m.v1.copy(t),m.v2.copy(n),m.z=Math.max(t.positionScreen.z,n.positionScreen.z),m.renderOrder=T.renderOrder,m.material=T.material,T.material.vertexColors===THREE.VertexColors&&(m.vertexColors[0].fromArray(y,3*e),m.vertexColors[1].fromArray(y,3*r)),O.elements.push(m))}function h(e,r,t){var n=g[e],i=g[r],a=g[t];if(!1!==p(n,i,a)&&(H.side===THREE.DoubleSide||!0===E(n,i,a))){f=o(),f.id=T.id,f.v1.copy(n),f.v2.copy(i),f.v3.copy(a),f.z=(n.positionScreen.z+i.positionScreen.z+a.positionScreen.z)/3,f.renderOrder=T.renderOrder,f.normalModel.fromArray(v,3*e),f.normalModel.applyMatrix3(w).normalize();for(var s=0;s<3;s++){var l=f.vertexNormalsModel[s];l.fromArray(v,3*arguments[s]),l.applyMatrix3(w).normalize();f.uvs[s].fromArray(x,2*arguments[s])}f.vertexNormalsLength=3,f.material=T.material,O.elements.push(f)}}var v=[],y=[],x=[],T=null,H=null,w=new THREE.Matrix3;return{setObject:e,projectVertex:r,checkTriangleVisibility:p,checkBackfaceCulling:E,pushVertex:t,pushNormal:n,pushColor:s,pushUv:l,pushLine:d,pushTriangle:h}},q=new U;this.projectScene=function(r,n,s,p){h=0,v=0,x=0,O.elements.length=0,!0===r.autoUpdate&&r.updateMatrixWorld(),null===n.parent&&n.updateMatrixWorld(),B.copy(n.matrixWorldInverse.getInverse(n.matrixWorld)),A.multiplyMatrices(n.projectionMatrix,B),G.setFromMatrix(A),E=0,O.objects.length=0,O.lights.length=0,e(r),!0===s&&O.objects.sort(l);for(var u=O.objects,y=0,T=u.length;y<T;y++){var H=u[y].object,w=H.geometry;if(q.setObject(H),R=H.matrixWorld,d=0,H instanceof THREE.Mesh){if(w instanceof THREE.BufferGeometry){var S=w.attributes,M=w.groups;if(S.position===undefined)continue;for(var b=S.position.array,z=0,V=b.length;z<V;z+=3)q.pushVertex(b[z],b[z+1],b[z+2]);if(S.normal!==undefined)for(var j=S.normal.array,z=0,V=j.length;z<V;z+=3)q.pushNormal(j[z],j[z+1],j[z+2]);if(S.uv!==undefined)for(var k=S.uv.array,z=0,V=k.length;z<V;z+=2)q.pushUv(k[z],k[z+1]);if(null!==w.index){var N=w.index.array;if(M.length>0)for(var W=0;W<M.length;W++)for(var U=M[W],z=U.start,V=U.start+U.count;z<V;z+=3)q.pushTriangle(N[z],N[z+1],N[z+2]);else for(var z=0,V=N.length;z<V;z+=3)q.pushTriangle(N[z],N[z+1],N[z+2])}else for(var z=0,V=b.length/3;z<V;z+=3)q.pushTriangle(z,z+1,z+2)}else if(w instanceof THREE.Geometry){var J=w.vertices,K=w.faces,Q=w.faceVertexUvs[0];P.getNormalMatrix(R);for(var X=H.material,Y=Array.isArray(X),Z=0,$=J.length;Z<$;Z++){var _=J[Z];if(C.copy(_),!0===X.morphTargets)for(var ee=w.morphTargets,re=H.morphTargetInfluences,te=0,ne=ee.length;te<ne;te++){var ie=re[te];if(0!==ie){var oe=ee[te],ae=oe.vertices[Z];C.x+=(ae.x-_.x)*ie,C.y+=(ae.y-_.y)*ie,C.z+=(ae.z-_.z)*ie}}q.pushVertex(C.x,C.y,C.z)}for(var se=0,le=K.length;se<le;se++){var ce=K[se];if((X=!0===Y?H.material[ce.materialIndex]:H.material)!==undefined){var pe=X.side,Ee=g[ce.a],ue=g[ce.b],de=g[ce.c];if(!1!==q.checkTriangleVisibility(Ee,ue,de)){var fe=q.checkBackfaceCulling(Ee,ue,de);if(pe!==THREE.DoubleSide){if(pe===THREE.FrontSide&&!1===fe)continue;if(pe===THREE.BackSide&&!0===fe)continue}f=o(),f.id=H.id,f.v1.copy(Ee),f.v2.copy(ue),f.v3.copy(de),f.normalModel.copy(ce.normal),!1!==fe||pe!==THREE.BackSide&&pe!==THREE.DoubleSide||f.normalModel.negate(),f.normalModel.applyMatrix3(P).normalize();for(var he=ce.vertexNormals,me=0,ve=Math.min(he.length,3);me<ve;me++){var ye=f.vertexNormalsModel[me];ye.copy(he[me]),!1!==fe||pe!==THREE.BackSide&&pe!==THREE.DoubleSide||ye.negate(),ye.applyMatrix3(P).normalize()}f.vertexNormalsLength=he.length;var xe=Q[se];if(xe!==undefined)for(var Re=0;Re<3;Re++)f.uvs[Re].copy(xe[Re]);f.color=ce.color,f.material=X,f.z=(Ee.positionScreen.z+ue.positionScreen.z+de.positionScreen.z)/3,f.renderOrder=H.renderOrder,O.elements.push(f)}}}}}else if(H instanceof THREE.Line){if(F.multiplyMatrices(A,R),w instanceof THREE.BufferGeometry){var S=w.attributes;if(S.position!==undefined){for(var b=S.position.array,z=0,V=b.length;z<V;z+=3)q.pushVertex(b[z],b[z+1],b[z+2]);if(S.color!==undefined)for(var Te=S.color.array,z=0,V=Te.length;z<V;z+=3)q.pushColor(Te[z],Te[z+1],Te[z+2]);if(null!==w.index)for(var N=w.index.array,z=0,V=N.length;z<V;z+=2)q.pushLine(N[z],N[z+1]);else for(var He=H instanceof THREE.LineSegments?2:1,z=0,V=b.length/3-1;z<V;z+=He)q.pushLine(z,z+1)}}else if(w instanceof THREE.Geometry){var J=H.geometry.vertices;if(0===J.length)continue;Ee=i(),Ee.positionScreen.copy(J[0]).applyMatrix4(F);for(var He=H instanceof THREE.LineSegments?2:1,Z=1,$=J.length;Z<$;Z++)Ee=i(),Ee.positionScreen.copy(J[Z]).applyMatrix4(F),(Z+1)%He>0||(ue=g[d-2],D.copy(Ee.positionScreen),I.copy(ue.positionScreen),!0===c(D,I)&&(D.multiplyScalar(1/D.w),I.multiplyScalar(1/I.w),m=a(),m.id=H.id,m.v1.positionScreen.copy(D),m.v2.positionScreen.copy(I),m.z=Math.max(D.z,I.z),m.renderOrder=H.renderOrder,m.material=H.material,H.material.vertexColors===THREE.VertexColors&&(m.vertexColors[0].copy(H.geometry.colors[Z]),m.vertexColors[1].copy(H.geometry.colors[Z-1])),O.elements.push(m)))}}else if(H instanceof THREE.Points){if(F.multiplyMatrices(A,R),w instanceof THREE.Geometry)for(var J=H.geometry.vertices,Z=0,$=J.length;Z<$;Z++){var _=J[Z];L.set(_.x,_.y,_.z,1),L.applyMatrix4(F),t(L,H,n)}}else H instanceof THREE.Sprite&&(L.set(R.elements[12],R.elements[13],R.elements[14],1),L.applyMatrix4(A),t(L,H,n))}return!0===p&&O.elements.sort(l),O}};