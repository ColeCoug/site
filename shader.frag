precision highp float;
varying vec2 vTexCoord;
uniform sampler2D pal;
uniform vec2 c;
void main() {
    vec2 z=vec2(5.*vTexCoord.x-2.5,(5.*vTexCoord.y-2.5)*${windowHeight/windowWidth});
    int iter=100;
    for(int i=0;i<100;i++) {
        float x=(z.x)*(z.x)-(z.y)*(z.y)+c.x;
        float y=2.*(z.x)*(z.y)+c.y;
        if((x*x+y*y)>4.) {iter=i;break;}
        z.x=x;
        z.y=y;
    }
    gl_FragColor=texture2D(pal,vec2(iter==100?0.:float(iter)/100.,1));
}