import pyautogui as pag
import time

#coord_x, coord_y = pag.position()
#print(coord_x, coord_y)

#активация окна
x, y = pag.size() # 1366 768 
#задержка
delay = 0.5

while True:
	#закрыть окно - Прайм продаж
	#pag.moveTo(834, 224, delay)
	#pag.click(interval=delay)
	#закрыть окно - Набор золота
	#pag.moveTo(1030, 224, delay)
	#pag.click(interval=delay)

	for i in range(0, 7):
		#главная ферма Урожай готов 
		pag.moveTo(1328, 302, delay)
		pag.click(clicks=2, interval=delay)

		#собрать урожай
		pag.moveTo(x/2, y/2, delay)
		pag.click(interval=delay)

		#амбар переполнен - продать
		pag.moveTo(782, 523, delay)
		pag.click(interval=delay)
		time.sleep(6)

		#засеять тоже
		pag.moveTo(x/2, y/2, delay)
		pag.click(interval=delay)
		pag.moveTo(782, 455, delay)
		pag.click(interval=delay)

	#pag.dragTo(1300, 650, delay, button='left')
	time.sleep(1)
	
	