define([
    'hammer',
],function(Hammer) {
	menuView = {
		menu: document.querySelector('aside'),
		menu_anchor: document.querySelector('body'),
		menutoggle: document.querySelector('.menutoggle'),
		init: function() {
			var hammertime = new Hammer(this.menu_anchor);
			var self = this;
			hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
			hammertime.on('swiperight', function() {
			    self.openMenu();
			});
			hammertime.on('swipeleft', function() {
			    self.closeMenu();
			});
			this.menutoggle.onclick = function(e){
				e.preventDefault();
				if (self.menu_anchor.classList.contains('active')) {
					self.closeMenu();
				} else {
					self.openMenu();
				}
			};
		},
		openMenu: function() {
			if (!this.menu_anchor.classList.contains('active')) {
				this.menu_anchor.classList.add('active');
			}
		},
		closeMenu: function() {
			if (this.menu_anchor.classList.contains('active')) {
				this.menu_anchor.classList.remove('active');
			}
		}
		// swipeDown: function() {}
	}
	return {
		menu: menuView
	}

});