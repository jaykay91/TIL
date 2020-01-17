# 테스트하기 위해 unittest모듈을 import 한다
import unittest


def sum_all(numbers):
    result = 0
    for num in numbers:
        result += num
    return result


def sum_ab(a, b):
    return a + b


# unittest.TestCase를 상속 받은 테스트 클래스를 작성한다
class SumTests(unittest.TestCase):
    def test_sum(self):
        a = 1
        b = 4
        self.assertEqual(sum_ab(a, b), 5)

    def test_sum_ab(self):
        self.assertEqual(sum_all([1, 2, 3, 4, 5]), 15)


# 테스트를 실행하기 위해 unittest.main을 호출한다
unittest.main()


# 실행 결과
# ----------------------------------------------------------------------
# Ran 2 tests in 0.001s

# OK
