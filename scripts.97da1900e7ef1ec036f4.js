function isEqual(r,n){for(var u=0;u<r.length;u++)if(r[u]!=n[u])return!0;return!1}function DFS(r,n,u,t,h,s,o,a){var i=[u];for(o[u[0]][u[1]]=null,a[u[0]][u[1]]=0;!isEqual(h,u)&&(u=i.pop(),s.push(u),null!=u);)0==t[u[0]][u[1]]&&(u[0]+1>=0&&u[0]+1<r&&0==t[u[0]+1][u[1]]&&(i.push([u[0]+1,u[1]]),a[u[0]+1][u[1]]=a[u[0]][u[1]]+1,o[u[0]+1][u[1]]=[u[0],u[1]]),u[1]+1>=0&&u[1]+1<n&&0==t[u[0]][u[1]+1]&&(i.push([u[0],u[1]+1]),a[u[0]][u[1]+1]=a[u[0]][u[1]]+1,o[u[0]][u[1]+1]=[u[0],u[1]]),u[0]-1>=0&&u[0]-1<r&&0==t[u[0]-1][u[1]]&&(i.push([u[0]-1,u[1]]),a[u[0]-1][u[1]]=a[u[0]][u[1]]+1,o[u[0]-1][u[1]]=[u[0],u[1]]),u[1]-1>=0&&u[1]-1<n&&0==t[u[0]][u[1]-1]&&(i.push([u[0],u[1]-1]),a[u[0]][u[1]-1]=a[u[0]][u[1]]+1,o[u[0]][u[1]-1]=[u[0],u[1]]),t[u[0]][u[1]]=1);console.log(o);for(var f=o[h[0]][h[1]],l=[[h[0],h[1]]];null!=f&&0!=f.length;)null!=f&&0!=f.length&&(l.push(f),console.log("aya"),f=o[f[0]][f[1]]);return l}function DFSSearch(r,n,u,t,h){for(var s=[],o=[],a=[],i=[],f=0;f<r;f++){for(var l=[],e=0;e<n;e++)l.push(0);s.push(l)}for(f=0;f<r;f++){for(l=[],e=0;e<n;e++)l.push([]);o.push(l)}for(f=0;f<r;f++){for(l=[],e=0;e<n;e++)l.push(Number.POSITIVE_INFINITY);a.push(l)}for(f=0;f<h.length;f++)s[h[f][0]][h[f][1]]=1;return[i,DFS(r,n,u,s,t,i,o,a)]}function isEqual(r,n){for(var u=0;u<r.length;u++)if(r[u]!=n[u])return!0;return!1}function BFS(r,n,u,t,h,s,o,a){for(var i=[[u[0],u[1]]];!isEqual(h,u)&&null!=(u=i.shift());)0==t[u[0]][u[1]]&&(u[0]+1>=0&&u[0]+1<r&&0==t[u[0]+1][u[1]]&&(i.push([u[0]+1,u[1]]),a[u[0]+1][u[1]]=a[u[0]][u[1]]+1,o[u[0]+1][u[1]]=[u[0],u[1]]),u[1]+1>=0&&u[1]+1<n&&0==t[u[0]][u[1]+1]&&(i.push([u[0],u[1]+1]),a[u[0]][u[1]+1]=a[u[0]][u[1]]+1,o[u[0]][u[1]+1]=[u[0],u[1]]),u[0]-1>=0&&u[0]-1<r&&0==t[u[0]-1][u[1]]&&(i.push([u[0]-1,u[1]]),a[u[0]-1][u[1]]=a[u[0]][u[1]]+1,o[u[0]-1][u[1]]=[u[0],u[1]]),u[1]-1>=0&&u[1]-1<n&&0==t[u[0]][u[1]-1]&&(i.push([u[0],u[1]-1]),a[u[0]][u[1]-1]=a[u[0]][u[1]]+1,o[u[0]][u[1]-1]=[u[0],u[1]]),t[u[0]][u[1]]=1,s.push(u));for(var f=o[h[0]][h[1]],l=[[h[0],h[1]]];0!=f.length;)l.push(f),0!=f.length&&(f=o[f[0]][f[1]]);return l}function BFSSearch(r,n,u,t,h){for(var s=[],o=[],a=[],i=[],f=0;f<r;f++){for(var l=[],e=0;e<n;e++)l.push(0);s.push(l)}for(f=0;f<r;f++){for(l=[],e=0;e<n;e++)l.push([]);o.push(l)}for(f=0;f<r;f++){for(l=[],e=0;e<n;e++)l.push(Number.POSITIVE_INFINITY);a.push(l)}for(f=0;f<h.length;f++)s[h[f][0]][h[f][1]]=1;return[i,BFS(r,n,u,s,t,i,o,a)]}function isEqual(r,n){for(var u=0;u<r.length;u++)if(r[u]!=n[u])return!1;return!0}function minDist(r,n){for(var u=1/0,t=0;t<n.length;t++)r[n[t][0]][n[t][1]]<u&&(u=r[n[t][0]][n[t][1]],idx=t);return idx}function Dijsktra(r,n,u,t,h,s,o,a,i){var f=[u];for(o[u[0]][u[1]]=null,a[u[0]][u[1]]=0;!isEqual(h,u);){var l=minDist(a,f);if(null==(u=f.splice(l,1)[0]))break;u.toString()in i||s.push(u),0==t[u[0]][u[1]]&&(u[0]+1>=0&&u[0]+1<r&&0==t[u[0]+1][u[1]]&&(f.push([u[0]+1,u[1]]),a[u[0]+1][u[1]]=u.toString()in i?a[u[0]][u[1]]+15:a[u[0]][u[1]]+1,o[u[0]+1][u[1]]=[u[0],u[1]]),u[1]+1>=0&&u[1]+1<n&&0==t[u[0]][u[1]+1]&&(f.push([u[0],u[1]+1]),a[u[0]][u[1]+1]=u.toString()in i?a[u[0]][u[1]]+15:a[u[0]][u[1]]+1,o[u[0]][u[1]+1]=[u[0],u[1]]),u[1]-1>=0&&u[1]-1<n&&0==t[u[0]][u[1]-1]&&(f.push([u[0],u[1]-1]),a[u[0]][u[1]-1]=u.toString()in i?a[u[0]][u[1]]+15:a[u[0]][u[1]]+1,o[u[0]][u[1]-1]=[u[0],u[1]]),u[0]-1>=0&&u[0]-1<r&&0==t[u[0]-1][u[1]]&&(f.push([u[0]-1,u[1]]),a[u[0]-1][u[1]]=u.toString()in i?a[u[0]][u[1]]+15:a[u[0]][u[1]]+1,o[u[0]-1][u[1]]=[u[0],u[1]]),t[u[0]][u[1]]=1)}for(var e=o[h[0]][h[1]],p=[[h[0],h[1]]];null!=e&&0!=e.length;)null!=e&&0!=e.length&&(p.push(e),e=o[e[0]][e[1]]);return p}function DijsktrasSearch(r,n,u,t,h,s){for(var o=[],a=[],i=[],f={},l=[],e=0;e<r;e++){for(var p=[],g=0;g<n;g++)p.push(0);o.push(p)}for(e=0;e<r;e++){for(p=[],g=0;g<n;g++)p.push([]);a.push(p)}for(e=0;e<r;e++){for(p=[],g=0;g<n;g++)p.push(Number.POSITIVE_INFINITY);i.push(p)}for(e=0;e<h.length;e++)o[h[e][0]][h[e][1]]=1;for(e=0;e<s.length;e++)s[e].toString()in f||(f[s[e].toString()]=15);return console.log(f),[l,Dijsktra(r,n,u,o,t,l,a,i,f)]}function isEqual(r,n){for(var u=0;u<r.length;u++)if(r[u]!=n[u])return!1;return!0}function minDist(r,n){for(var u=1/0,t=n.length-1;t>=0;t--)r[n[t][0]][n[t][1]]<u&&(u=r[n[t][0]][n[t][1]],idx=t);return idx}function ASTAR(r,n,u,t,h,s,o,a,i,f){var l=[u];for(o[u[0]][u[1]]=null,a[u[0]][u[1]]=0,f[u[0]][u[1]]=0;!isEqual(h,u);){var e=minDist(a,l);if(void 0===(u=l.splice(e,1)[0]))break;u.toString()in i||s.push(u),0==t[u[0]][u[1]]&&(u[0]+1>=0&&u[0]+1<r&&0==t[u[0]+1][u[1]]&&(l.push([u[0]+1,u[1]]),u.toString()in i?(a[u[0]+1][u[1]]=f[u[0]][u[1]]+15+Math.abs(u[0]+1-h[0])+Math.abs(u[1]-h[1]),f[u[0]+1][u[1]]=f[u[0]][u[1]]+15):(a[u[0]+1][u[1]]=f[u[0]][u[1]]+1+Math.abs(u[0]+1-h[0])+Math.abs(u[1]-h[1]),f[u[0]+1][u[1]]=f[u[0]][u[1]]+1),o[u[0]+1][u[1]]=[u[0],u[1]]),u[1]+1>=0&&u[1]+1<n&&0==t[u[0]][u[1]+1]&&(l.push([u[0],u[1]+1]),u.toString()in i?(a[u[0]][u[1]+1]=f[u[0]][u[1]]+15+Math.abs(u[0]-h[0])+Math.abs(u[1]+1-h[1]),f[u[0]][u[1]+1]=f[u[0]][u[1]]+15):(a[u[0]][u[1]+1]=f[u[0]][u[1]]+1+Math.abs(u[0]-h[0])+Math.abs(u[1]+1-h[1]),f[u[0]][u[1]+1]=f[u[0]][u[1]]+1),o[u[0]][u[1]+1]=[u[0],u[1]]),u[1]-1>=0&&u[1]-1<n&&0==t[u[0]][u[1]-1]&&(l.push([u[0],u[1]-1]),u.toString()in i?(a[u[0]][u[1]-1]=f[u[0]][u[1]]+15+Math.abs(u[0]-h[0])+Math.abs(u[1]-1-h[1]),f[u[0]][u[1]-1]=f[u[0]][u[1]]+15):(a[u[0]][u[1]-1]=f[u[0]][u[1]]+1+Math.abs(u[0]-h[0])+Math.abs(u[1]-1-h[1]),f[u[0]][u[1]-1]=f[u[0]][u[1]]+1),o[u[0]][u[1]-1]=[u[0],u[1]]),u[0]-1>=0&&u[0]-1<r&&0==t[u[0]-1][u[1]]&&(l.push([u[0]-1,u[1]]),u.toString()in i?(a[u[0]-1][u[1]]=f[u[0]][u[1]]+15+Math.abs(u[0]-1-h[0])+Math.abs(u[1]-h[1]),f[u[0]-1][u[1]]=f[u[0]][u[1]]+15):(a[u[0]-1][u[1]]=f[u[0]][u[1]]+1+Math.abs(u[0]-1-h[0])+Math.abs(u[1]-h[1]),f[u[0]-1][u[1]]=f[u[0]][u[1]]+1),o[u[0]-1][u[1]]=[u[0],u[1]]),console.log(a),t[u[0]][u[1]]=1)}for(var p=o[h[0]][h[1]],g=[[h[0],h[1]]];null!=p&&0!=p.length;)null!=p&&0!=p.length&&(g.push(p),p=o[p[0]][p[1]]);return g}function Astar(r,n,u,t,h,s){for(var o=[],a=[],i=[],f=[],l={},e=[],p=0;p<r;p++){for(var g=[],S=0;S<n;S++)g.push(0);o.push(g)}for(p=0;p<r;p++){for(g=[],S=0;S<n;S++)g.push([]);a.push(g)}for(p=0;p<r;p++){for(g=[],S=0;S<n;S++)g.push(Number.POSITIVE_INFINITY);i.push(g)}for(p=0;p<r;p++){for(g=[],S=0;S<n;S++)g.push(Number.POSITIVE_INFINITY);f.push(g)}for(p=0;p<h.length;p++)o[h[p][0]][h[p][1]]=1;for(p=0;p<s.length;p++)s[p].toString()in l||(l[s[p].toString()]=15);return[e,ASTAR(r,n,u,o,t,e,a,i,l,f)]}