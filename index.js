setInterval(() => {
     D = new Date();
    htime = d.getHourse();
    mtime = d.getminutes();
    stime = d.getseconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.tranform = 'rotate(${hrotation}deg)';
    minute.style.tranform = 'rotate(${hrotation}deg)';
    second.style.tranform = 'rotate(${hrotation}deg)';
},1000);


