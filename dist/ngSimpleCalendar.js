!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){var n=a(1);void 0===angular.element.prototype.querySelectorAll&&(angular.element.prototype.querySelectorAll=function(e){return angular.element(this[0].querySelectorAll(e))});var r=Object.create(null);r.weekStart=0,angular.module("envoc.simpleCalendar",[]).constant("simpleCalendarConfig",r).directive("simpleCalendar",n)},function(e,t,a){function n(e){return{restrict:"EA",scope:{date:"=",events:"="},controller:r,controllerAs:"calendar",bindToController:!0,transclude:!0,link:function(t,a,n,r,s){s(t,function(n){var r=angular.element(i),s=r.querySelectorAll(".simple-calendar-day").append(n),l=r.querySelectorAll("simple-calendar-day"),o=r.querySelectorAll("simple-calendar-event"),d=angular.element("<div />");if(d.append(l.html()||"{{$day.day}}"),o.length){var c=angular.element('<div class="simple-calendar-event" />').attr("ng-repeat","$event in $day.events").attr("ng-click","calendar.onEventClick($day.events[$index], $day); $event.stopPropagation();").html(o.html());d.append(c)}s.empty().append(d),a.append(e(r)(t))}),r.init(a)}}}function r(e,t,a,n){function r(){y.date=y.date||new Date,y.events=l().slice(),e.$watchCollection(l,function(){o(y.date)}),e.$watch(i,o)}function i(){return y.date}function l(){return y.events||[]}function o(e){var t=c(new Date(e));y.days=p.getCalendar.apply(p,t),y.days.forEach(d.bind(null,y.events)),y.weeks=h(y.days,7)}function d(e,t){t.events=e.filter(function(e){var a=c(new Date(e.date)),n=a[0]===t.year&&a[1]===t.month&&a[2]===t.day;return n})}function c(e){return[e.getFullYear(),e.getMonth(),e.getDate()]}function h(e,t){for(var a=e.slice(),n=a.length/t,r=[],s=0;n>s;s++)r.push(a.splice(0,t));return r}var y=this,u=angular.extend(n,{siblingMonths:!0}),p=new s(u),m=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],D=m.splice(n.weekStart);y.weekdays=D.concat(m),y.init=r,y.onDayClick=n.onDayClick||function(){},y.onEventClick=n.onEventClick||function(){}}var s=a(3).Calendar,i=a(2);n.$inject=["$compile"],r.$inject=["$scope","$element","$attrs","simpleCalendarConfig"],e.exports=n},function(e,t,a){e.exports='<table class="simple-calendar">\r\n    <thead>\r\n        <tr>\r\n            <td ng-repeat="weekday in calendar.weekdays">{{weekday}}</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr ng-repeat="week in calendar.weeks"\r\n            class="simple-calendar-week">\r\n            <td ng-repeat="$day in week"\r\n                ng-click="calendar.onDayClick($day)"\r\n                class="simple-calendar-day"\r\n                ng-class="{\'sibling-month\': $day.siblingMonth, \'has-events\': $day.events.length}">\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>'},function(e,t,a){function n(e){e=e||{},this.startDate=e.startDate,this.endDate=e.endDate,this.maxInterval=e.maxInterval,this.maxConstraint=e.maxConstraint,this.siblingMonths=e.siblingMonths,this.weekStart=e.weekStart,void 0===this.weekStart&&(this.weekStart=0),this.date=new Date(1986,9,14,0,0,0)}n.prototype.getCalendar=function(e,t){this.date.setUTCFullYear(e),this.date.setUTCMonth(t),this.date.setUTCDate(1);for(var a,r,s,i,l,o=[],d=this.date.getUTCDay(),c=-((7-this.weekStart+d)%7),h=n.daysInMonth(e,t),y=(h-c)%7,u=n.daysInMonth(e,t-1),p=c,m=h-p+(0!=y?7-y:0)+c;m>p;)r=p+1,a=((1>p?7+p:p)+d)%7,1>r||r>h?this.siblingMonths?(1>r?(i=t-1,l=e,0>i&&(i=11,l--),r=u+r):r>h&&(i=t+1,l=e,i>11&&(i=0,l++),r=p-h+1),s={day:r,weekDay:a,month:i,year:l,siblingMonth:!0}):s=!1:s={day:r,weekDay:a,month:t,year:e},s&&this.startDate&&(s.selected=this.isDateSelected(s)),o.push(s),p++;return o},n.prototype.isDateSelected=function(e){return e.year==this.startDate.year&&e.month==this.startDate.month&&e.day==this.startDate.day?!0:this.endDate?e.year==this.startDate.year&&e.month==this.startDate.month&&e.day<this.startDate.day?!1:e.year==this.endDate.year&&e.month==this.endDate.month&&e.day>this.endDate.day?!1:e.year==this.startDate.year&&e.month<this.startDate.month?!1:e.year==this.endDate.year&&e.month>this.endDate.month?!1:e.year<this.startDate.year?!1:e.year>this.endDate.year?!1:!0:!1},n.prototype.setStartDate=function(e){this.startDate=e},n.prototype.setEndDate=function(e){this.endDate=e},n.prototype.setDate=n.prototype.setStartDate,n.interval=function(e,t){var a=new Date(1986,9,14,0,0,0),n=new Date(1986,9,14,0,0,0);return a.setUTCFullYear(e.year),a.setUTCMonth(e.month),a.setUTCDate(e.day),n.setUTCFullYear(t.year),n.setUTCMonth(t.month),n.setUTCDate(t.day),Math.abs(Math.ceil((n.getTime()-a.getTime())/864e5))+1},n.daysInMonth=function(e,t){return-1==t||0==t||2==t||4==t||6==t||7==t||9==t||11==t?31:3==t||5==t||8==t||10==t?30:1==t?28+n.isLeapYear(e):void 0},n.isLeapYear=function(e){return e%4==0&&e%100!=0||e%400==0},e.exports={Calendar:n}}]);